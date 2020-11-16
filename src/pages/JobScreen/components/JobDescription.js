import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { getJobDate } from '../../../helpers/getJobDate';

const ArticleHeader = styled.div`
	margin-bottom: 40px;
`;

const ArticleStyled = styled.article`
	background: ${({ theme }) => theme.jobCard};
	margin-top: 20px;
	border-radius: 5px;
	padding: 30px 50px;
	line-height: 2rem;
`;

export const JobDescription = ({
	created_at,
	description,
	location: jobLocation,
	title,
	type,
}) => {
	return (
		<>
			{description && (
				<ArticleStyled>
					<ArticleHeader>
						<span>
							{`${getJobDate(created_at)}d ago  `}• {type}
						</span>
						<h1>{title}</h1>
						<span>{jobLocation}</span>
					</ArticleHeader>
					{parse(description)}
				</ArticleStyled>
			)}
		</>
	);
};
