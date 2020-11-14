import React from 'react';
import styled from 'styled-components';

const CompanyInfoStyled = styled.div`
	width: 100%;
	height: 125px;
	margin-top: -30px;
	background: #fff;
	border-radius: 5px;
	display: flex;
	overflow: hidden;
	.ImageContainer {
		display: flex;
		align-items: center;
		width: 175px;
		height: auto;
		background: #000;
		overflow: hidden;
		img {
			width: 100%;
			height: auto;
		}
	}
	.right {
		width: 80%;
		padding: 40px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.text {
			h3 {
				margin: 0;
				margin-bottom: 13px;
			}

			span {
				font-size: 0.8rem;
				font-weight: 600;
				color: #d3d3d3;
			}
		}
	}
`;
const CustomButtonHref = styled.a`
	background: #d90429;
	border: none;
	border-radius: 5px;
	color: #fff;
	cursor: pointer;
	display: inline-block;
	font-size: 0.8rem;
	font-weight: 700;
	opacity: 0.9;
	outline: none;
	padding: 15px 20px;
	text-decoration: none;
	transition: 0.2s ease-in-out;

	:hover {
		opacity: 1;
	}
`;
export const JobCompanyInfo = ({ company_img, company, company_url }) => {
	return (
		<CompanyInfoStyled>
			<div className='ImageContainer'>
				<img src={company_img} alt={company} />
			</div>
			<div className='right'>
				<div className='text'>
					<h3>{company}</h3>
					<span>{company_url}</span>
				</div>
				<CustomButtonHref
					color='#ef233c'
					href={company_url}
					target='_blank'
				>
					Company Site
				</CustomButtonHref>
			</div>
		</CompanyInfoStyled>
	);
};
