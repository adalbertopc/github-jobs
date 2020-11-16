import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getJobDate } from '../../../helpers/getJobDate';

const JobStyled = styled.div`
	background: ${({ theme }) => theme.jobCard};
	border-radius: 7px;
	padding: 10px 30px;
	position: relative;
	box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
`;

const TitleStyled = styled(Link)`
	text-decoration: none;
	font-size: 1.2rem;
	font-weight: 700;
	color: ${({ theme }) => theme.text};
`;
const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	min-height: 50px;
	max-width: 50px;
	max-height: 50px;
	border-radius: 12px;
	background: cyan;
	position: absolute;
	top: -20px;
	overflow: hidden;
`;

const ImageStyled = styled.img`
	max-width: 50px;
	max-height: 50px;
	width: auto;
`;

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 45px;

	span {
		color: #8d99ae;
		font-size: 0.8rem;
		margin-bottom: 10px;
	}

	.company {
		color: #8d99ae;
		font-size: 0.9rem;
	}
	.location {
		font-weight: 600;
		font-size: 0.6rem;
		color: ${({ theme }) => theme.header};
	}
`;

export const JobListItem = ({ job }) => {
	const {
		id,
		type,
		created_at,
		company,
		title,
		location,
		company_logo,
	} = job;

	return (
		<JobStyled>
			<ImageContainer>
				<ImageStyled src={company_logo} alt={company} />
			</ImageContainer>
			<InfoContainer>
				<span>
					{`${getJobDate(created_at)}d ago  `}• {type}
				</span>
				<TitleStyled to={{ pathname: `/job/${id}` }}>
					{title}
				</TitleStyled>
				<p className='company'>{company}</p>
				<p className='location'>{location}</p>
			</InfoContainer>
		</JobStyled>
	);
};
