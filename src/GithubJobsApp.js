import React, { useReducer } from 'react';
import Normalize from 'react-normalize';
import { AppRouter } from './routes/AppRouter';
import { GlobalStyles } from './components/styled/GlobalStyles';
//Dark mode switcher
import { ThemeContext, ThemeProvider } from 'styled-components';
import { themeReducer } from './themes/themeReducer';
import { lightTheme, darkTheme } from './themes/Themes';

export const GithubJobsApp = () => {
	const [state, dispatch] = useReducer(themeReducer, {
		isDark: false,
	});
	return (
		<>
			<Normalize />
			<ThemeContext.Provider value={{ state, dispatch }}>
				<ThemeProvider
					theme={state.isDark ? darkTheme : lightTheme}
				>
					<GlobalStyles />

					<AppRouter />
				</ThemeProvider>
			</ThemeContext.Provider>
		</>
	);
};
