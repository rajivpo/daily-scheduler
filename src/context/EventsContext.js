import React, { useState } from "react";

export const EventsContext = React.createContext();

const EventsProvider = props => {
	const [events, setEvents] = useState([]);
	const [roomsNeeded, setRoomsNeeded] = useState(1);

	// add to set of events
	const addEvent = (values) => {
		// convert from str to int
		values.start = parseInt(values.start);
		values.end = parseInt(values.end);
		let unsortedEvents = [...events, values]
		updateSchedule(unsortedEvents);
	}

	// helper to get meeting room
	const assignMeetingRoomsToEvents = (sortedEvents) => {
		// starting room number counting @ 1 to facilitate CSS calculation
		// O(n^2) Greedy approach
		// TODO: fix bug where it alters room assignment even when event can fit in current schedule
		let numRooms = roomsNeeded;
		sortedEvents[0]["room"] = 1;
		for (let i = 1; i < sortedEvents.length; i++) {
			// boolean array to track which rooms are open for any interval
			let roomLabels = Array(roomsNeeded).fill(true); 
			let currentEvent = sortedEvents[i];

			// find all preceding events that are overlapping from sorted order and mark labels
			for (let j = 0; j < i; j++) {
				let prevEvent = sortedEvents[j];
				if (isOverlappingInterval(prevEvent, currentEvent)) {
					roomLabels[prevEvent["room"] - 1] = false; // -1 to account indexing starting at 1
				}
			}

			let roomIndex = roomLabels.findIndex(elem => elem === true)
			if (roomIndex > -1) {
				currentEvent["room"] = roomIndex + 1;
			} else {
				numRooms += 1;
				currentEvent["room"] = numRooms;
			}
		}
		setRoomsNeeded(numRooms);
		return sortedEvents;
	}

	//used for validation
	const hasTitle = (event) => {
		return (event.title.length > 0);
	}

	// used for validation
	const isEndTimeValid = (start, end) => {
		return (parseInt(start) < parseInt(end))
	}

	// check if the interval is overlapping
	const isOverlappingInterval = (event1, event2) => {
		return ((event1.start < event2.end) && (event2.start < event1.end))
	}

		const updateEvent = (values, idx) => {
		// copy events 
		let unsortedEvents = [...events];

		// update event info
		values.start = parseInt(values.start);
		values.end = parseInt(values.end);

		// copy new event
		unsortedEvents[idx] = values;

		// reconfigure schedule
		updateSchedule(unsortedEvents);
	}

	// sort by start times
	const sortEvents = (newSetOfEvents) => {
		return newSetOfEvents.sort((a, b) => {
			if (a.start > b.start) return 1;
			if (a.start < b.start) return -1;
			return (a.end > b.end) ? 1 : -1
		})
	}

	const updateSchedule = (unsortedEvents) => {
		let sortedEvents = sortEvents(unsortedEvents);
		let sortedEventsWithRoomNumbers = assignMeetingRoomsToEvents(sortedEvents);
		setEvents(sortedEventsWithRoomNumbers);
	}

	return (
		<EventsContext.Provider value={{
			events, 
			roomsNeeded, 
			addEvent, 
			isEndTimeValid,
			updateEvent,
			hasTitle
		}}>
			{props.children}
		</EventsContext.Provider>
	);
};

export default EventsProvider;