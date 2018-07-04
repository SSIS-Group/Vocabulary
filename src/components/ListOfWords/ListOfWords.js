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

	generateListFromA = () => {
		let arrWords = [];
		for (let index = 0; index < A.length; index++) {
			arrWords = [...arrWords, A[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromB = () => {
		let arrWords = [];
		for (let index = 0; index < B.length; index++) {
			arrWords = [...arrWords, B[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromC = () => {
		let arrWords = [];
		for (let index = 0; index < C.length; index++) {
			arrWords = [...arrWords, C[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromD = () => {
		let arrWords = [];
		for (let index = 0; index < D.length; index++) {
			arrWords = [...arrWords, D[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromE = () => {
		let arrWords = [];
		for (let index = 0; index < E.length; index++) {
			arrWords = [...arrWords, E[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromF = () => {
		let arrWords = [];
		for (let index = 0; index < F.length; index++) {
			arrWords = [...arrWords, F[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromG = () => {
		let arrWords = [];
		for (let index = 0; index < G.length; index++) {
			arrWords = [...arrWords, G[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromH = () => {
		let arrWords = [];
		for (let index = 0; index < H.length; index++) {
			arrWords = [...arrWords, H[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromI = () => {
		let arrWords = [];
		for (let index = 0; index < I.length; index++) {
			arrWords = [...arrWords, I[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromJ = () => {
		let arrWords = [];
		for (let index = 0; index < J.length; index++) {
			arrWords = [...arrWords, J[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromK = () => {
		let arrWords = [];
		for (let index = 0; index < K.length; index++) {
			arrWords = [...arrWords, K[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromL = () => {
		let arrWords = [];
		for (let index = 0; index < L.length; index++) {
			arrWords = [...arrWords, L[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromM = () => {
		let arrWords = [];
		for (let index = 0; index < M.length; index++) {
			arrWords = [...arrWords, M[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromN = () => {
		let arrWords = [];
		for (let index = 0; index < N.length; index++) {
			arrWords = [...arrWords, N[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromO = () => {
		let arrWords = [];
		for (let index = 0; index < O.length; index++) {
			arrWords = [...arrWords, O[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromP = () => {
		let arrWords = [];
		for (let index = 0; index < P.length; index++) {
			arrWords = [...arrWords, P[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromQ = () => {
		let arrWords = [];
		for (let index = 0; index < Q.length; index++) {
			arrWords = [...arrWords, Q[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromR = () => {
		let arrWords = [];
		for (let index = 0; index < R.length; index++) {
			arrWords = [...arrWords, R[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromS = () => {
		let arrWords = [];
		for (let index = 0; index < S.length; index++) {
			arrWords = [...arrWords, S[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromT = () => {
		let arrWords = [];
		for (let index = 0; index < T.length; index++) {
			arrWords = [...arrWords, T[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromU = () => {
		let arrWords = [];
		for (let index = 0; index < U.length; index++) {
			arrWords = [...arrWords, U[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromV = () => {
		let arrWords = [];
		for (let index = 0; index < V.length; index++) {
			arrWords = [...arrWords, V[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromW = () => {
		let arrWords = [];
		for (let index = 0; index < W.length; index++) {
			arrWords = [...arrWords, W[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromX = () => {
		let arrWords = [];
		for (let index = 0; index < X.length; index++) {
			arrWords = [...arrWords, X[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromY = () => {
		let arrWords = [];
		for (let index = 0; index < Y.length; index++) {
			arrWords = [...arrWords, Y[index]];
		}
		this.setState({
			words: arrWords
		});
	}
	generateListFromZ = () => {
		let arrWords = [];
		for (let index = 0; index < Z.length; index++) {
			arrWords = [...arrWords, Z[index]];
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
					<button className='btn btn-primary' onClick={() => this.generateListFromA()}>A</button>
					<button className='btn btn-primary' onClick={() => this.generateListFromB()}>B</button>
					<button className='btn btn-primary' onClick={() => this.generateListFromC()}>C</button>
					<button className='btn btn-primary' onClick={() => this.generateListFromD()}>D</button>
					<button className='btn btn-primary' onClick={() => this.generateListFromE()}>E</button>
					<button className='btn btn-primary' onClick={() => this.generateListFromF()}>F</button>
					<button className='btn btn-primary' onClick={() => this.generateListFromG()}>G</button>
					<button className='btn btn-primary' onClick={() => this.generateListFromH()}>H</button>
				</div>
				<div className='btn-group' style={{ 'paddingTop': '1%' }}>
					<button className='btn btn-primary' onClick={() => this.generateListFromI()}>I</button>
					<button className='btn btn-primary' onClick={() => this.generateListFromJ()}>J</button>
					<button className='btn btn-primary' onClick={() => this.generateListFromK()}>K</button>
					<button className='btn btn-primary' onClick={() => this.generateListFromL()}>L</button>
					<button className='btn btn-primary' onClick={() => this.generateListFromM()}>M</button>
					<button className='btn btn-primary' onClick={() => this.generateListFromN()}>N</button>
					<button className='btn btn-primary' onClick={() => this.generateListFromO()}>O</button>
					<button className='btn btn-primary' onClick={() => this.generateListFromP()}>P</button>
				</div>
				<div className='btn-group' style={{ 'paddingTop': '1%' }}>
					<button className='btn btn-primary' onClick={() => this.generateListFromQ()}>Q</button>
					<button className='btn btn-primary' onClick={() => this.generateListFromR()}>R</button>
					<button className='btn btn-primary' onClick={() => this.generateListFromS()}>S</button>
					<button className='btn btn-primary' onClick={() => this.generateListFromT()}>T</button>
					<button className='btn btn-primary' onClick={() => this.generateListFromU()}>U</button>
					<button className='btn btn-primary' onClick={() => this.generateListFromV()}>V</button>
					<button className='btn btn-primary' onClick={() => this.generateListFromW()}>W</button>
					<button className='btn btn-primary' onClick={() => this.generateListFromX()}>X</button>
				</div>
				<div className='btn-group' style={{ 'paddingTop': '1%' }}>
					<button className='btn btn-primary' onClick={() => this.generateListFromY()}>Y</button>
					<button className='btn btn-primary' onClick={() => this.generateListFromZ()}>Z</button>
					<button className='btn btn-primary' onClick={() => this.resetList()}>Reset</button>
				</div>
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