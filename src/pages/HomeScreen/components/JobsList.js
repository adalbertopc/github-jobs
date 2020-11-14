import React from 'react';
import { JobListItem } from './JobListItem';
import styled from 'styled-components';
import { useDataApi } from '../../../hooks/useDataApi';
import { getURLWithParams } from '../../../helpers/getUrlWithParams';

const JobsListStyled = styled.main`
	display: grid;
	grid-template-columns: repeat(3, minmax(100px, 1fr));
	grid-gap: 50px 10px;
	margin-top: 50px;
`;

export const JobsList = ({ queryParams }) => {
	const { description, location, full_time } = queryParams;
	const url = getURLWithParams(description, location, full_time);
	const { data, isLoading, isError } = useDataApi(url);
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
						<h1>No se encontraron resultados</h1>
					)}
				</JobsListStyled>
			)}
		</>
	);
};
