import React, { useState } from 'react';
import { JobsList } from './components/JobsList';

export const HomeScreen = () => {
	return (
		<div>
			<h1>Jobs</h1>
			<JobsList />
		</div>
	);
};
