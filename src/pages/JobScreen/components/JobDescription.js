import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

const ArticleStyled = styled.article`
	background: #fff;
	margin-top: 20px;
	border-radius: 5px;
	padding: 30px 50px;
`;

export const JobDescription = ({
	created_at,
	description,
	location: jobLocation,
	title,
	type,
}) => {
	return <ArticleStyled>{parse(description)}</ArticleStyled>;
};