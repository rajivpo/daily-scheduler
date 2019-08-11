import React from "react";
import { Button, Title, HeaderContainer } from "./style";
import useToggle from "../../hooks/useToggle";
import Modal from "../Modal";
import EventForm from "../EventForm";

const Header = () => {
	const [open, setOpen] = useToggle(false);

	const closeModal = () => {
		setOpen(false);
	}

	// try to refactor entirety of modal to elsewhere

	return (
		<HeaderContainer>
		<Title>Schedule</Title>
		<Button onClick={setOpen}>Add Event</Button>
		  {open && (
          <Modal open={open} toggle={setOpen}>
          	<EventForm closeModal={closeModal}/>
          </Modal>
        )}
		
		</HeaderContainer>
	)
}

export default Header;