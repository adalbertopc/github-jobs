import React from 'react';
import { SearchField } from './SearchField';
import { BsSearch, BsGeoAlt } from 'react-icons/bs';

import styled from 'styled-components';
import { CustomButton } from './styled/CustomButton';
import { useForm } from '../hooks/useForm';
import { CheckBox } from './styled/CheckBox';

const SearchBarStyled = styled.div`
	form {
		background: ${({ theme }) => theme.searchBar};
		input {
			background: ${({ theme }) => theme.searchBar};
			color: ${({ theme }) => theme.text};
		}
		padding: 12px 12px 12px 15px;
		border-radius: 5px;
		display: grid;
		align-items: center;
		grid-template-columns: repeat(4, 1fr);
		justify-content: center;
		box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.15);
		margin-top: -30px;
	}
`;

export const SearchBar = ({ handleSearch }) => {
	const [values, handleInputChanges, reset] = useForm();

	return (
		<SearchBarStyled>
			<form onSubmit={(e) => handleSearch(e, values)}>
				<SearchField
					Ico={BsSearch}
					placeholder='Filter by title, companies, expertise...'
					handleChange={handleInputChanges}
					name='description'
				/>
				<SearchField
					Ico={BsGeoAlt}
					placeholder='Filter by location...'
					handleChange={handleInputChanges}
					name='location'
				/>
				<CheckBox
					label='Full time'
					name='full_time'
					handleChange={handleInputChanges}
				/>
				<CustomButton>Search</CustomButton>
			</form>
		</SearchBarStyled>
	);
};
