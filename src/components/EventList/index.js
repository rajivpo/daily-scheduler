import React, { useContext } from "react";
import { EventsContext } from "../../context/EventsContext";
import Event from "./Event";
import { EventListContainer } from "./style"; 

const EventList = () => {
	const { events, roomsNeeded } = useContext(EventsContext);

	return (
		<EventListContainer>
		{events.map((event, idx) => <Event key={idx} index={idx} event={event} roomsNeeded={roomsNeeded}/>)}
		</EventListContainer>
	)
}

export default EventList;