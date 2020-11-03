import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { HomeScreen } from '../pages/HomeScreen/HomeScreen';
import { JobScreen } from '../pages/JobScreen';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { Wrapper } from '../components/styled/Wrapper';
export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Header />
				<Wrapper>
					<SearchBar />
					<Switch>
						<Route
							exact
							path='/job/:id'
							component={JobScreen}
						/>
						<Route exact path='/' component={HomeScreen} />
					</Switch>
				</Wrapper>
			</div>
		</Router>
	);
};
