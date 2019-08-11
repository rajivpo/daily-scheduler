import React from "react";
import { dimensionsFromTimeAsPercentage } from "../../utils/DataTransformer";
import useToggle from "../../hooks/useToggle";
import Modal from "../Modal";
import EventForm from "../EventForm";
import { EventDescription, EventTitle, EventWrapper } from "./style";

const Event = ({ event, roomsNeeded, index }) => {

	const [open, setOpen] = useToggle(false);
	const closeModal = () => {
		setOpen(false);
	}

	// calculate dimensions
	const { top, height, width, left } = dimensionsFromTimeAsPercentage(
		event.start, 
		event.end,
		event.room,
		roomsNeeded
	);


	return (
		<EventWrapper 
			top={top}
			height={height}
			width={width}
			left={left}
			onClick={setOpen}
		>
			{open && (
	          <Modal open={open} toggle={setOpen}>
	          	<EventForm eventInfo={event} closeModal={closeModal} isUpdate={true} index={index}/>
	          </Modal>
	        )}
	        <EventTitle>
	        {event.title}
	        </EventTitle>
	        <EventDescription>{event.description}</EventDescription>
		</EventWrapper>
	)
}

export default Event;