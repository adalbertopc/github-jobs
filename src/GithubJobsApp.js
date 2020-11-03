import React from 'react';
import Normalize from 'react-normalize';

import { AppRouter } from './routes/AppRouter';
import { GlobalStyles } from './components/styled/GlobalStyles';
export const GithubJobsApp = () => {
	return (
		<>
			<Normalize />
			<GlobalStyles />

			<AppRouter />
		</>
	);
};
