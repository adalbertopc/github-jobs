import React, { useEffect } from 'react';
import { JobListItem } from './JobListItem';
import styled from 'styled-components';
import { useDataApi } from '../../../hooks/useDataApi';

const JobsListStyled = styled.main`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 50px 10px;
`;

export const JobsList = () => {
	const [state, setUrl] = useDataApi();
	const { data, isLoading, isError } = state;

	useEffect(() => {
		console.log('data cambio');
	}, [state]);

	return (
		<>
			{isLoading ? (
				<h1>Loading</h1>
			) : (
				<JobsListStyled>
					{data.map((job) => (
						<JobListItem key={job.id} job={job} />
					))}
				</JobsListStyled>
			)}
		</>
	);
};
