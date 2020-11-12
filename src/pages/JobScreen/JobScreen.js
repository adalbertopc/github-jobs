import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useDataApi } from '../../hooks/useDataApi';
import { JobCompanyInfo } from './components/JobCompanyInfo';
import { JobDescription } from './components/JobDescription';
import { JobHowToApply } from './components/JobHowToApply';

export const JobScreen = () => {
	const params = useParams();
	const [jobData, setJobData] = useState({});
	const { data, isLoading } = useDataApi(
		`https://api.allorigins.win/raw?url=${encodeURIComponent(
			`https://jobs.github.com/positions/${params.id}.json`
		)}`
	);
	useEffect(() => {
		setJobData(data);
	}, [data]);

	const {
		company,
		company_logo,
		company_url,
		created_at,
		description,
		how_to_apply,
		id,
		location: jobLocation,
		title,
		type,
		url,
	} = jobData;
	console.log(jobData);
	return (
		<>
			{
				<>
					<JobCompanyInfo
						company={company}
						company_img={company_logo}
						company_url={company_url}
					/>
					<JobDescription
						created_at={created_at}
						description={description}
						jobLocation={jobLocation}
						title={title}
						type={type}
					/>
					<JobHowToApply how_to_apply={how_to_apply} />
				</>
			}
		</>
	);
};
