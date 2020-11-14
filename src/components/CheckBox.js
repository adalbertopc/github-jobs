import React from 'react';
import styled from 'styled-components';

const CheckBoxStyled = styled.div`
	input[type='checkbox'] {
		border-radius: 2px;
		margin-right: 5px;
		height: 50px;
	}

	label {
		font-weight: 800;
	}
`;
export const CheckBox = ({ name, label, handleChange }) => {
	return (
		<CheckBoxStyled>
			<input name={name} type='checkbox' onChange={handleChange} />
			<label>{label}</label>
		</CheckBoxStyled>
	);
};
