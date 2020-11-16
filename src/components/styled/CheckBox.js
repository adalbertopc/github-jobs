import React from 'react';
import styled from 'styled-components';

const CheckBoxStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	input[type='checkbox'] {
		appearance: none;
		position: relative;
		width: 45px;
		height: 22px;
		border-radius: 30px;
		background: #ccc;
		cursor: pointer;
		transition: background 0.3s ease;
		outline: none;

		&::after {
			content: '';
			position: absolute;
			background: #fff;
			top: 3px;
			left: 4px;
			border-radius: 30px;
			width: 16px;
			height: 16px;
			transition: all 0.3s ease;
		}
		&:checked {
			background: #1fb5da;
		}

		&:checked::after {
			left: 25px;
		}
	}

	label {
		font-weight: 800;
		margin-left: 20px;
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
