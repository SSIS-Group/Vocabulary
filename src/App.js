import React, { Component } from 'react';
import { A } from './assets/wordlist.json';
import { B } from './assets/wordlist.json';
import { C } from './assets/wordlist.json';

class App extends Component {
	constructor() {
		super();
		this.state = {
			myWord: '',
			itsMeaning: ''
		};
	}

	generateWordFromA = () => {
		let myWord = A[Math.floor(Math.random() * A.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromB = () => {
		let myWord = B[Math.floor(Math.random() * B.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromC = () => {
		let myWord = C[Math.floor(Math.random() * C.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	render() {
		return (
			<div className='container'>
				<h1 style={{ 'textAlign': 'center', 'marginTop': '1%' }}>Hello!</h1>
				<h3>Click on the button to improve your vocabulary</h3>
				<div className='btn-group' style={{'paddingTop': '1%'}}>
					<button className='btn btn-primary' onClick={() => this.generateWordFromA()}>A</button>
					<button className='btn btn-primary' onClick={() => this.generateWordFromB()}>B</button>
					<button className='btn btn-primary' onClick={() => this.generateWordFromC()}>C</button>
					<button className='btn btn-primary' onClick={console.log("clicked")}>D</button>
					<button className='btn btn-primary' onClick={console.log("clicked")}>E</button>
					<button className='btn btn-primary' onClick={console.log("clicked")}>F</button>
					<button className='btn btn-primary' onClick={console.log("clicked")}>G</button>
					<button className='btn btn-primary' onClick={console.log("clicked")}>H</button>
					<button className='btn btn-primary' onClick={console.log("clicked")}>I</button>
					<button className='btn btn-primary' onClick={console.log("clicked")}>J</button>
					<button className='btn btn-primary' onClick={console.log("clicked")}>K</button>
					<button className='btn btn-primary' onClick={console.log("clicked")}>L</button>
				</div>
				<div className='btn-group' style={{'paddingTop': '1%'}}>
					<button className='btn btn-primary' onClick={console.log("clicked")}>M</button>
					<button className='btn btn-primary' onClick={console.log("clicked")}>N</button>
					<button className='btn btn-primary' onClick={console.log("clicked")}>O</button>
					<button className='btn btn-primary' onClick={console.log("clicked")}>P</button>
					<button className='btn btn-primary' onClick={console.log("clicked")}>Q</button>
					<button className='btn btn-primary' onClick={console.log("clicked")}>R</button>
					<button className='btn btn-primary' onClick={console.log("clicked")}>S</button>
					<button className='btn btn-primary' onClick={console.log("clicked")}>T</button>
					<button className='btn btn-primary' onClick={console.log("clicked")}>U</button>
					<button className='btn btn-primary' onClick={console.log("clicked")}>V</button>
					<button className='btn btn-primary' onClick={console.log("clicked")}>W</button>
				</div>
				<div className='btn-group' style={{'paddingTop': '1%'}}>
					<button className='btn btn-primary' onClick={console.log("clicked")}>X</button>
					<button className='btn btn-primary' onClick={console.log("clicked")}>Y</button>
					<button className='btn btn-primary' onClick={console.log("clicked")}>Z</button>
				</div>


				<p style={{ 'fontFamily': 'Raleway' }} onClick={console.log("Clicked")} ><strong>{this.state.myWord}</strong></p>
				<p style={{ 'fontFamily': 'Raleway' }} >{this.state.itsMeaning}</p>
			</div>
		);
	}
}

export default App;
