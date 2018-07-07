import React from 'react';
import './ListOfWords.css';
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

class ListOfWords extends React.Component {
	constructor() {
		super();
		this.state = {
			words: ['Word: Meaning', 'Word: Meaning']
		};
	}

	resetList = () => {
		this.setState({
			words: ['Word: Meaning', 'Word: Meaning']
		});
	}

	goToTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	generateList = (myChar) => {
		let arrWords = [];
		for (let index = 0; index < myChar.length; index++) {
			arrWords = [...arrWords, myChar[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	render() {
		return (
			<div className='container'>
				<h1 style={{ 'textAlign': 'center', 'marginTop': '1%' }}>Hello!</h1>
				<h6>Click on the button to show a list of words and its meaning</h6>
				<div className='btn-group' style={{ 'paddingTop': '1%' }}>
					<button className='btn btn-primary' onClick={() => this.generateList(A)}>A</button>
					<button className='btn btn-primary' onClick={() => this.generateList(B)}>B</button>
					<button className='btn btn-primary' onClick={() => this.generateList(C)}>C</button>
					<button className='btn btn-primary' onClick={() => this.generateList(D)}>D</button>
					<button className='btn btn-primary' onClick={() => this.generateList(E)}>E</button>
					<button className='btn btn-primary' onClick={() => this.generateList(F)}>F</button>
					<button className='btn btn-primary' onClick={() => this.generateList(G)}>G</button>
					<button className='btn btn-primary' onClick={() => this.generateList(H)}>H</button>
				</div>
				<div className='btn-group' style={{ 'paddingTop': '1%' }}>
					<button className='btn btn-primary' onClick={() => this.generateList(I)}>I</button>
					<button className='btn btn-primary' onClick={() => this.generateList(J)}>J</button>
					<button className='btn btn-primary' onClick={() => this.generateList(K)}>K</button>
					<button className='btn btn-primary' onClick={() => this.generateList(L)}>L</button>
					<button className='btn btn-primary' onClick={() => this.generateList(M)}>M</button>
					<button className='btn btn-primary' onClick={() => this.generateList(N)}>N</button>
					<button className='btn btn-primary' onClick={() => this.generateList(O)}>O</button>
					<button className='btn btn-primary' onClick={() => this.generateList(P)}>P</button>
				</div>
				<div className='btn-group' style={{ 'paddingTop': '1%' }}>
					<button className='btn btn-primary' onClick={() => this.generateList(Q)}>Q</button>
					<button className='btn btn-primary' onClick={() => this.generateList(R)}>R</button>
					<button className='btn btn-primary' onClick={() => this.generateList(S)}>S</button>
					<button className='btn btn-primary' onClick={() => this.generateList(T)}>T</button>
					<button className='btn btn-primary' onClick={() => this.generateList(U)}>U</button>
					<button className='btn btn-primary' onClick={() => this.generateList(V)}>V</button>
					<button className='btn btn-primary' onClick={() => this.generateList(W)}>W</button>
					<button className='btn btn-primary' onClick={() => this.generateList(X)}>X</button>
				</div>
				<div className='btn-group' style={{ 'paddingTop': '1%' }}>
					<button className='btn btn-primary' onClick={() => this.generateList(Y)}>Y</button>
					<button className='btn btn-primary' onClick={() => this.generateList(Z)}>Z</button>
					<button className='btn btn-primary' onClick={() => this.resetList()}>Reset</button>
				</div>
				<h6 style={{'paddingTop': '1%', 'fontFamily':'Raleway'}}><strong>{this.state.words.length === 2? 0: this.state.words.length}</strong> { this.state.words.length === 1 ? 'Word':'Words'}</h6>
				<table className="table table-striped table-responsive" style={{ 'marginTop': '5%', 'marginBottom': '10%' }}>
					<thead>
						<tr>
							<th>Word</th>
							<th>Meaning</th>
						</tr>
					</thead>
					<tbody>
						{
							this.state.words.map(
								(object, i) => (
									<tr key={i}>
										<td style={{ 'fontFamily': 'Raleway' }}>{object.split(':')[0]}</td>
										<td style={{ 'fontFamily': 'Raleway' }}>{object.split(':')[1]}</td>
									</tr>
								)
							)
						}
					</tbody>
				</table>
				<button className='btn btn-primary btn-circle' onClick={() => this.goToTop()}>^</button>
			</div>
		);
	}
}

export default ListOfWords;