import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

const HowToApplyStyled = styled.div`
	margin-top: 20px;
	background: blue;
	color: #fff;
	padding: 30px 50px;
	border-radius: 7px;

	a {
		color: #fff;
	}
`;
export const JobHowToApply = ({ how_to_apply }) => {
	return <HowToApplyStyled>{parse(how_to_apply)}</HowToApplyStyled>;
};
