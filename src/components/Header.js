import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Wrapper } from './styled/Wrapper';
const HeaderStyled = styled.header`
	height: 100px;
	background: #6666ff;
	border-radius: 0 0 0 65px;
	padding-top: 10px;
`;

const WrapperStyled = styled(Wrapper)`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const NavLinkStyled = styled(NavLink)`
	color: #fff;
	text-decoration: none;
	font-size: 1.4rem;
	font-weight: 600;
`;

export const Header = () => {
	return (
		<HeaderStyled>
			<WrapperStyled className='wrapper'>
				<NavLinkStyled className='.pageLogo' to='/'>
					devjobs
				</NavLinkStyled>
				<p>Dark Theme</p>
			</WrapperStyled>
		</HeaderStyled>
	);
};
