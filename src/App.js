import React, { Component } from 'react';
import { A } from './assets/wordlist.json';

class App extends Component {
	constructor() {
		super();
		this.word = A[Math.floor(Math.random()*A.length)].split(":");
	}
	render() {
		return (
			<div className='container'>
				<h1>Hello</h1>
				<p style={{'fontFamily': 'Raleway'}} >{ this.word[0] }</p>
				<p style={{'fontFamily': 'Raleway'}} >{ this.word[1] }</p>
			</div>
		);
	}
}

export default App;
