import React, { useContext } from "react";
import { TimeOptionsDataArray, TimeOptionsDataDictionary } from "../../utils/TimeOptionsData";
import useForm from "../../hooks/useForm";
import { EventsContext } from "../../context/EventsContext";
import { EventFormContainer, FlexForm, FormElement } from "./style";


const defaultInitialValues = {
		start:  "0",
		end: "720",
		title: "",
		description: ""
}


const EventForm = ({ closeModal, eventInfo=defaultInitialValues, isUpdate, index }) => {

	const { addEvent, updateEvent, isEndTimeValid, hasTitle } = useContext(EventsContext); 

	const initialValues = {
		start: eventInfo.start || defaultInitialValues.start,
		end: eventInfo.end || defaultInitialValues.end,
		title: eventInfo.title || defaultInitialValues.title,
		description: eventInfo.description || defaultInitialValues.description
	}

	const validate = (values) => {
		let errors = [];
		if (!isEndTimeValid(values.start, values.end)) {
			 errors.push('End Time must occur AFTER Start Time. Try again...');
		}
		if (!hasTitle(values)) {
			errors.push('Event must have a title!');
		}

		return errors;
	}

	// having close modal in here is dirty -- PLEASE CLEAN UP
	const onSubmit = ({values, errors, e}) => {
		e.preventDefault();
		if (errors.length) {
			errors.map(error => alert(error));
		} else {
			if (isUpdate) {
				updateEvent(values, index);
			} else {
				addEvent(values);
			}
			closeModal();
		}
	}

	const { values, handleChange, handleSubmit } = useForm({
		initialValues,
		validate, 
		onSubmit
	});

	return (
		<EventFormContainer>
		    <FlexForm onSubmit={e => handleSubmit(e)}>
		    <FormElement>
		    	<label>Title: </label>
				<input type="text" name="title" value={values.title} onChange={e => handleChange(e)}/>
			</FormElement>
			<FormElement>
		    <label>Start Time: </label>
	    	<select name="start" value={values.start} onChange={e => handleChange(e)}>
	    	{
	    		TimeOptionsDataArray.map( (time, idx) => {
	    			return (
	    				<option key={idx} value={TimeOptionsDataDictionary[time]}>{time}</option>
	    			)
	    		})
	    	}
			</select>
			</FormElement>
			<FormElement>
			<label>End Time: </label>
	    	<select name="end" value={values.end} onChange={e => handleChange(e)}>
	    	{
	    		TimeOptionsDataArray.map( (time, idx) => {
	    			return (
	    				<option key={idx} value={TimeOptionsDataDictionary[time]}>{time}</option>
	    			)
	    			
	    		})
	    	}
			</select>
			</FormElement>
			<label>Description: </label>
			<textarea name="description" value={values.description} onChange={e => handleChange(e)} rows="5" columns="100"/>
			<FormElement>
			<button type="submit">Save</button>
			</FormElement>
		    </FlexForm>
		</EventFormContainer>
	)
}

export default EventForm;