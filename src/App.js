import React, { Component } from 'react';
import { A } from './assets/wordlist.json';
import { B } from './assets/wordlist.json';
import { C } from './assets/wordlist.json';
import { D } from './assets/wordlist.json';
import { E } from './assets/wordlist.json';
import { F } from './assets/wordlist.json';
import { G } from './assets/wordlist.json';
import { H } from './assets/wordlist.json';
import { I } from './assets/wordlist.json';
import { J } from './assets/wordlist.json';
import { K } from './assets/wordlist.json';
import { L } from './assets/wordlist.json';
import { M } from './assets/wordlist.json';
import { N } from './assets/wordlist.json';
import { O } from './assets/wordlist.json';
import { P } from './assets/wordlist.json';
import { Q } from './assets/wordlist.json';
import { R } from './assets/wordlist.json';
import { S } from './assets/wordlist.json';
import { T } from './assets/wordlist.json';
import { U } from './assets/wordlist.json';
import { V } from './assets/wordlist.json';
import { W } from './assets/wordlist.json';
import { X } from './assets/wordlist.json';
import { Y } from './assets/wordlist.json';
import { Z } from './assets/wordlist.json';

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

	generateWordFromD = () => {
		let myWord = D[Math.floor(Math.random() * D.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromE = () => {
		let myWord = E[Math.floor(Math.random() * E.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromF = () => {
		let myWord = F[Math.floor(Math.random() * F.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromG = () => {
		let myWord = G[Math.floor(Math.random() * G.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromH = () => {
		let myWord = H[Math.floor(Math.random() * H.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromI = () => {
		let myWord = I[Math.floor(Math.random() * I.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromJ = () => {
		let myWord = J[Math.floor(Math.random() * J.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromK = () => {
		let myWord = K[Math.floor(Math.random() * K.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromL = () => {
		let myWord = L[Math.floor(Math.random() * L.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromM = () => {
		let myWord = M[Math.floor(Math.random() * M.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromN = () => {
		let myWord = N[Math.floor(Math.random() * N.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromO = () => {
		let myWord = O[Math.floor(Math.random() * O.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromP = () => {
		let myWord = P[Math.floor(Math.random() * P.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromQ = () => {
		let myWord = Q[Math.floor(Math.random() * Q.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromR = () => {
		let myWord = R[Math.floor(Math.random() * R.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromS = () => {
		let myWord = S[Math.floor(Math.random() * S.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromT = () => {
		let myWord = T[Math.floor(Math.random() * T.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromU = () => {
		let myWord = U[Math.floor(Math.random() * U.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromV = () => {
		let myWord = V[Math.floor(Math.random() * V.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromW = () => {
		let myWord = W[Math.floor(Math.random() * W.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromX = () => {
		let myWord = X[Math.floor(Math.random() * X.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromY = () => {
		let myWord = Y[Math.floor(Math.random() * Y.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	generateWordFromZ = () => {
		let myWord = Z[Math.floor(Math.random() * Z.length)].split(":");
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
					<button className='btn btn-primary' onClick={ () => this.generateWordFromA() }>A</button>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromB() }>B</button>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromC() }>C</button>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromD() }>D</button>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromE() }>E</button>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromF() }>F</button>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromG() }>G</button>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromH() }>H</button>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromI() }>I</button>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromJ() }>J</button>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromK() }>K</button>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromL() }>L</button>
				</div>
				<div className='btn-group' style={{'paddingTop': '1%'}}>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromM() }>M</button>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromN() }>N</button>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromO() }>O</button>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromP() }>P</button>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromQ() }>Q</button>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromR() }>R</button>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromS() }>S</button>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromT() }>T</button>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromU() }>U</button>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromV() }>V</button>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromW() }>W</button>
				</div>
				<div className='btn-group' style={{'paddingTop': '1%'}}>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromX() }>X</button>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromY() }>Y</button>
					<button className='btn btn-primary' onClick={ () => this.generateWordFromZ() }>Z</button>
				</div>


				<p style={{ 'fontFamily': 'Raleway' }} ><strong>{this.state.myWord}</strong></p>
				<p style={{ 'fontFamily': 'Raleway' }} >{this.state.itsMeaning}</p>
			</div>
		);
	}
}

export default App;
