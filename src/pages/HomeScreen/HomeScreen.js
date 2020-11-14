import React, { useState } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { JobsList } from './components/JobsList';

export const HomeScreen = () => {
	const [queryParams, setQueryParams] = useState({});
	const handleSearch = (e, values) => {
		e.preventDefault();
		setQueryParams(values);
	};
	return (
		<>
			<SearchBar handleSearch={handleSearch} />
			<JobsList queryParams={queryParams} />
		</>
	);
};
