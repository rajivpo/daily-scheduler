import { TimeOptionsDataDictionary } from "./TimeOptionsData";

export const timeToMinutesAfter9AM = time => {
	try {
		const minutesAfter9AM = TimeOptionsDataDictionary[time];
		return minutesAfter9AM
	} catch (err) {
		console.log(err)
		return null;
	}
}


export const dimensionsFromTimeAsPercentage = (startTime, endTime, room = 1, totalRooms = 1) => {
	// 720 minutes in entire schedule (9AM-9PM)
	const top = (Math.round(startTime/720 * 10000)/100) + "%";
	const height = Math.round((endTime - startTime)/720 * 10000)/100 + "%";
	const width = Math.round(1/totalRooms * 10000)/100 + "%";
	const left = (room - 1)*Math.round(1/totalRooms * 10000)/100 + "%";
	return { top, height, width, left };
}

export const getTimeFromMinutesAfter9AM = minutesAfter9AM => {
	// we could write the reverse map or use _js, but this just felt natural
	return Object.keys(TimeOptionsDataDictionary).find(key =>  {
		return parseInt(TimeOptionsDataDictionary[key]) === parseInt(minutesAfter9AM);
	});
}