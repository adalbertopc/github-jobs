import React from 'react';
import { SearchField } from './SearchField';
import { BsSearch, BsGeoAlt } from 'react-icons/bs';

import styled from 'styled-components';

const SearchBarStyled = styled.div`
	background: #fff;
	padding: 20px;
	border-radius: 5px;
	display: grid;
	grid-template-columns: 1.5fr 1fr 1fr;
	box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.15);
	margin-top: -30px;
`;

export const SearchBar = () => {
	return (
		<SearchBarStyled>
			<SearchField
				Ico={BsSearch}
				placeholder='Filter by title, companies, expertise...'
			/>
			<SearchField
				Ico={BsGeoAlt}
				placeholder='Filter by location...'
			/>
		</SearchBarStyled>
	);
};
