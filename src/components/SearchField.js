import React from 'react';
import { CustomInput } from './styled/CustomInput';

import styled from 'styled-components';

const SearchFieldStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
	svg {
		margin-right: 10px;
	}
	input {
		width: 100%;
		border: none;
		outline: none;
	}
`;

export const SearchField = ({ placeholder, Ico, handleChange }) => {
	return (
		<SearchFieldStyled>
			<Ico />
			<CustomInput onChange={handleChange} placeholder={placeholder} />
		</SearchFieldStyled>
	);
};
