import React from 'react';
import Header from './containers/Header/Header';
import MyRouter from './containers/MyRouter/MyRouter';
import Footer from './containers/Footer/Footer';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<MyRouter />
				<Footer />
			</div>
		);
	}
}

export default App;
