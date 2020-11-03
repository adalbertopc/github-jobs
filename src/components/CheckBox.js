import React from 'react';
import styled from 'styled-components';

const CheckBoxStyled = styled.div`
	input[type='checkbox'] {
		border-radius: 2px;
	}

	label {
		font-weight: 800;
	}
`;
export const CheckBox = ({ label }) => {
	return (
		<CheckBoxStyled>
			<input type='checkbox' />
			<label>{label}</label>
		</CheckBoxStyled>
	);
};
