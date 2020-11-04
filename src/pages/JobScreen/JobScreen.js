import React from 'react';
import styled from 'styled-components';
import { JobCompanyInfo } from './components/JobCompanyInfo';
import { JobDescription } from './components/JobDescription';
import { JobHowToApply } from './components/JobHowToApply';

export const JobScreen = ({ location }) => {
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
	} = location.jobInfo;

	return (
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
	);
};
