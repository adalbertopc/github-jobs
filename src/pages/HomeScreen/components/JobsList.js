import React from 'react';
import { JobListItem } from './JobListItem';
import styled from 'styled-components';
import { useDataApi } from '../../../hooks/useDataApi';
import { getURLWithParams } from '../../../helpers/getUrlWithParams';

const JobsListStyled = styled.main`
	display: grid;
	grid-template-columns: repeat(3, minmax(100px, 1fr));
	grid-gap: 50px 10px;
	margin: 50px 0;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(2, minmax(100px, 1fr));
	}

	@media (max-width: 500px) {
		grid-template-columns: minmax(100px, 1fr);
	}
`;

export const JobsList = ({ queryParams }) => {
	const { description, location, full_time } = queryParams;
	const url = getURLWithParams(description, location, full_time);
	const { data, isLoading } = useDataApi(url);
	return (
		<>
			{isLoading ? (
				<h1>Loading</h1>
			) : (
				<JobsListStyled>
					{data && data.length !== 0 ? (
						data.map((job) => (
							<JobListItem key={job.id} job={job} />
						))
					) : (
						<h1>Oops no results found</h1>
					)}
				</JobsListStyled>
			)}
		</>
	);
};
