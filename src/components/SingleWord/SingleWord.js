import React, { Component } from 'react';
import { A } from '../../assets/wordlist.json';
import { B } from '../../assets/wordlist.json';
import { C } from '../../assets/wordlist.json';
import { D } from '../../assets/wordlist.json';
import { E } from '../../assets/wordlist.json';
import { F } from '../../assets/wordlist.json';
import { G } from '../../assets/wordlist.json';
import { H } from '../../assets/wordlist.json';
import { I } from '../../assets/wordlist.json';
import { J } from '../../assets/wordlist.json';
import { K } from '../../assets/wordlist.json';
import { L } from '../../assets/wordlist.json';
import { M } from '../../assets/wordlist.json';
import { N } from '../../assets/wordlist.json';
import { O } from '../../assets/wordlist.json';
import { P } from '../../assets/wordlist.json';
import { Q } from '../../assets/wordlist.json';
import { R } from '../../assets/wordlist.json';
import { S } from '../../assets/wordlist.json';
import { T } from '../../assets/wordlist.json';
import { U } from '../../assets/wordlist.json';
import { V } from '../../assets/wordlist.json';
import { W } from '../../assets/wordlist.json';
import { X } from '../../assets/wordlist.json';
import { Y } from '../../assets/wordlist.json';
import { Z } from '../../assets/wordlist.json';

class SingleWord extends Component {
	constructor() {
		super();
		this.state = {
			myWord: '',
			itsMeaning: ''
		};
	}

	generateWord = (myChar) => {
		let myWord = myChar[Math.floor(Math.random() * myChar.length)].split(":");
		this.setState({
			myWord: myWord[0],
			itsMeaning: myWord[1]
		});
	}

	render() {
		return (
			<div className='container'>
				<h1 style={{ 'textAlign': 'center', 'marginTop': '1%' }}>Hello!</h1>
				<h6>Click on the button to show a random word and its meaning</h6>
				<div className='btn-group' style={{'paddingTop': '1%'}}>
					<button className='btn btn-primary' onClick={ () => this.generateWord(A) }>A</button>
					<button className='btn btn-primary' onClick={ () => this.generateWord(B) }>B</button>
					<button className='btn btn-primary' onClick={ () => this.generateWord(C) }>C</button>
					<button className='btn btn-primary' onClick={ () => this.generateWord(D) }>D</button>
					<button className='btn btn-primary' onClick={ () => this.generateWord(E) }>E</button>
					<button className='btn btn-primary' onClick={ () => this.generateWord(F) }>F</button>
					<button className='btn btn-primary' onClick={ () => this.generateWord(G) }>G</button>
					<button className='btn btn-primary' onClick={ () => this.generateWord(H) }>H</button>
				</div>
				<div className='btn-group' style={{'paddingTop': '1%'}}>
					<button className='btn btn-primary' onClick={ () => this.generateWord(I) }>I</button>
					<button className='btn btn-primary' onClick={ () => this.generateWord(J) }>J</button>
					<button className='btn btn-primary' onClick={ () => this.generateWord(K) }>K</button>
					<button className='btn btn-primary' onClick={ () => this.generateWord(L) }>L</button>
					<button className='btn btn-primary' onClick={ () => this.generateWord(M) }>M</button>
					<button className='btn btn-primary' onClick={ () => this.generateWord(N) }>N</button>
					<button className='btn btn-primary' onClick={ () => this.generateWord(O) }>O</button>
					<button className='btn btn-primary' onClick={ () => this.generateWord(P) }>P</button>					
				</div>
				<div className='btn-group' style={{'paddingTop': '1%'}}>
					<button className='btn btn-primary' onClick={ () => this.generateWord(Q) }>Q</button>
					<button className='btn btn-primary' onClick={ () => this.generateWord(R) }>R</button>
					<button className='btn btn-primary' onClick={ () => this.generateWord(S) }>S</button>
					<button className='btn btn-primary' onClick={ () => this.generateWord(T) }>T</button>
					<button className='btn btn-primary' onClick={ () => this.generateWord(U) }>U</button>
					<button className='btn btn-primary' onClick={ () => this.generateWord(V) }>V</button>
					<button className='btn btn-primary' onClick={ () => this.generateWord(W) }>W</button>
					<button className='btn btn-primary' onClick={ () => this.generateWord(X) }>X</button>
				</div>
				<div className='btn-group' style={{'paddingTop': '1%'}}>
					<button className='btn btn-primary' onClick={ () => this.generateWord(Y) }>Y</button>
					<button className='btn btn-primary' onClick={ () => this.generateWord(Z) }>Z</button>
				</div>


				<p style={{ 'fontFamily': 'Raleway' }} ><strong>{this.state.myWord}</strong></p>
				<p style={{ 'fontFamily': 'Raleway' }} >{this.state.itsMeaning}</p>
			</div>
		);
	}
}

export default SingleWord;
