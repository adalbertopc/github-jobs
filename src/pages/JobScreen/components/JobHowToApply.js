import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

const HowToApplyStyled = styled.div`
	margin: 20px 0;
	background: #2b2d42;
	color: #fff;
	padding: 30px 50px;
	border-radius: 7px;
	a {
		color: #fff;
		text-decoration: none;
		font-weight: 600;
	}
`;
export const JobHowToApply = ({ how_to_apply }) => {
	return <HowToApplyStyled>{parse(how_to_apply)}</HowToApplyStyled>;
};
