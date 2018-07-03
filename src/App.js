import React, { Component } from 'react';
import { A } from './assets/wordlist.json';

class App extends Component {
	render() {
		return (
			<div className='container'>
				<h1>Hello</h1>
				<p style={{'fontFamily': 'Raleway'}} >{ A[Math.floor(Math.random()*A.length)] }</p>
			</div>
		);
	}
}

export default App;
