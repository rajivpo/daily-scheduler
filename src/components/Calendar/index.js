import React from "react";
import TimeList from "../TimeList";
import EventList from "../EventList";
import { CalendarContainer } from "./style";

const Calendar = ({events}) => {
	return (
		<CalendarContainer>
            <TimeList/>
            <EventList/>
        </CalendarContainer>
	)
}

export default Calendar;