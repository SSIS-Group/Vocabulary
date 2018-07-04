import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import SingleWord from '../../components/SingleWord/SingleWord';
import ListOfWords from '../../components/ListOfWords/ListOfWords';

const MyRouter = () => {
	return (
		<main>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/about' component={About} />
				<Route path='/single' component={SingleWord} />
				<Route path='/list' component={ListOfWords} />
			</Switch>
		</main>
	);
};

export default MyRouter;