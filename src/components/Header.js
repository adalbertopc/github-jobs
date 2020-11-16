import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';
import { CheckBox } from './styled/CheckBox';
import { Wrapper } from './styled/Wrapper';
const HeaderStyled = styled.header`
	height: 100px;
	background: ${({ theme }) => theme.header};
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
	const { dispatch } = useContext(ThemeContext);
	const handleChange = () => {
		dispatch({ type: 'TOGGLE_DARK_MODE' });
	};
	return (
		<HeaderStyled>
			<WrapperStyled className='wrapper'>
				<NavLinkStyled className='.pageLogo' to='/'>
					devjobs
				</NavLinkStyled>
				<CheckBox label='Dark theme' handleChange={handleChange} />
			</WrapperStyled>
		</HeaderStyled>
	);
};
