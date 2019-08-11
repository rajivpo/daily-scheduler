import { useState }from "react";

const useForm = ({ initialValues, onSubmit, validate }) => {

	const [values, setValues] = useState(initialValues || {});
	const [errors, setErrors] = useState([]);

	const handleChange = e => {
		const target = e.target;
		const value = target.value;
		const name = target.name;

		setValues({
			...values,
			[name]: value
		})
	}

	const handleSubmit = e => {
		e.preventDefault();
		const errors = validate(values);
		if (errors.length) {
			setErrors(errors);
		}

		onSubmit({values, errors, e});
	}

	return {
		values, errors, handleChange, handleSubmit
	}
}

export default useForm;