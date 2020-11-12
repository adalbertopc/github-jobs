import React from 'react';
import { SearchBar } from '../../components/SearchBar';
import { JobsList } from './components/JobsList';

export const HomeScreen = () => {
	return (
		<div>
			<SearchBar />
			<JobsList />
		</div>
	);
};
