import React from "react";
import { TimeOptionsDataArray } from "../../utils/TimeOptionsData";
import { TimeListContainer } from "./style";

const TimeList = () => {
	//currently only support for 30 minute intervals

	return (
		<TimeListContainer>
		{
			TimeOptionsDataArray.map( (time, idx) => <Time key={idx} index={idx} time={time}/>)
		}
		</TimeListContainer>
	)
}

const Time = ({ time, index }) => {
	const [number, meridiem] = time.split(' ');

	// TODO: refactor inline style
	return (
		<div style={{fontWeight: index % 2 ? 'normal' : 'bold'}}> 
		{number} {meridiem}
		</div>

	)
}

export default TimeList;