import React from 'react';
import { SearchBar } from '../../components/SearchBar';
import { useForm } from '../../hooks/useForm';
import { JobsList } from './components/JobsList';

export const SearchScreen = () => {
	const [values, handleInputChanges, reset] = useForm();
	const handleSearch = () => {};
	return (
		<>
			<SearchBar handleInputChanges={handleInputChanges} />
			<JobsList />
		</>
	);
};
