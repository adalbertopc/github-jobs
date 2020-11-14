import { useState } from 'react';

export const useForm = (initialState = {}) => {
	const [values, setValues] = useState(initialState);

	const reset = () => {
		setValues(initialState);
	};

	const handleInputChanges = ({ target }) => {
		setValues({
			...values,
			[target.name]:
				target.value === 'on' || target.value === 'off'
					? target.checked
					: target.value,
		});
	};

	return [values, handleInputChanges, reset];
};
