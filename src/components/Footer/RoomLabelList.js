import React, { useContext} from "react";
import { EventsContext } from "../../context/EventsContext";

const RoomLabelList = () => {
	const { roomsNeeded } = useContext(EventsContext);
	return (
		<React.Fragment>
		{
			new Array(roomsNeeded).fill().map((e, idx) => {
				return(
					<div key={idx}>Room {idx + 1}</div>
				)
			})
		}
		</React.Fragment>
	)
}

export default RoomLabelList;