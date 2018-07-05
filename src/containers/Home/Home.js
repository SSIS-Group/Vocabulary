import React from 'react';
import './Home.css';
import single from '../../assets/images/single1.jpg';
import list from '../../assets/images/list1.jpg';
import {Link} from 'react-router-dom';

const Home = () => {
	return (
		<div>

			<div className="parallax1"><h1 id="header">Welcome to Vocabulary App</h1></div>
			<div className="col-lg-12 text-box text-center">
				<h2>Seven Ways To Improve Vocabulary</h2>
				<div className="accordion" id="accordionExample">
					<div className="card">
						<div className="card-header" id="headingOne">
							<h5 className="mb-0">
								<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Reading...</button>
							</h5>
						</div>
						<div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
							<div className="card-body">
								The more you read -- especially novels and literary works, but also magazines and newspapers -- the more words you'll be exposed to. As you read and uncover new words, use a combination of attempting to derive meaning from the context of the sentence as well as from looking up the definition in a dictionary.
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-header" id="headingTwo">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Dictionary / Thesaurus...</button>
							</h5>
						</div>
						<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
							<div className="card-body">
								Use whatever versions you prefer -- in print, software, or online. When you uncover a new word, look it up in the dictionary to get both its pronunciation and its meaning(s). Next, go to the thesaurus and find similar words and phrases -- and their opposites (synonyms and antonyms, respectively) -- and learn the nuances among the words.
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-header" id="headingThree">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Good Journals / Newspapers...</button>
							</h5>
						</div>
						<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
							<div className="card-body">
								It's a good idea to keep a running list of the new words you discover so that you can refer back to the list and slowly build them into your everyday vocabulary. Plus, keeping a journal of all your new words can provide positive reinforcement for learning even more words -- especially when you can see how many new words you've already learned.
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-header" id="headingFour">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Word of the Day...</button>
							</h5>
						</div>
						<div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
							<div className="card-body">
								Using a word-a-day calendar or Website -- or developing your own list of words to learn -- is a great technique many people use to learn new words. This approach may be too rigid for some, so even if you do use this method, don't feel you must learn a new word every day.
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-header" id="headingFive">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Backtracking...</button>
							</h5>
						</div>
						<div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
							<div className="card-body">
								One of the most powerful tools for learning new words -- and for deciphering the meaning of other new words -- is studying Latin and Greek roots. Latin and Greek elements (prefixes, roots, and suffixes) are a significant part of the English language and a great tool for learning new words.
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-header" id="headingSix">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">Gaming...</button>
							</h5>
						</div>
						<div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
							<div className="card-body">
								Word games that challenge you and help you discover new meanings and new words are a great and fun tool in your quest for expanding your vocabulary. Examples include crossword puzzles, anagrams, word jumble, Scrabble, and Boggle.
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-header" id="headingSeven">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">Public Speaking...</button>
							</h5>
						</div>
						<div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
							<div className="card-body">
								Simply talking with other people can help you learn discover new words. As with reading, once you hear a new word, remember to jot it down so that you can study it later -- and then slowly add the new word to your vocabulary.
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="parallax2"><h1 id="header">Tailor-made for your needs</h1></div>
			<div className="col-lg-12 text-box text-center">
				<h2>Ensuring Faster Learning By</h2>
				<div className='row'>
					<div className='col-sm-6'>
						<div className="card" style={{'marginBottom':'10%'}}>
							<img className="card-img-top" src={single} alt='Single words' />
							<div className="card-body">
								<h5 className="card-title">Single Words</h5>
								<p className="card-text">Using this method, you can learn new words as words are generated randomly from the alphabet that you select.</p>
								<Link to='/single' replace className="btn btn-primary">Single Words</Link>
							</div>
						</div>
					</div>
					<div className='col-sm-6'>
						<div className="card" style={{'marginBottom':'20%'}}>
							<img className="card-img-top" src={list} alt='List of words' />
							<div className="card-body">
								<h5 className="card-title">List of Words</h5>
								<p className="card-text">Using this method, you can learn new words as a list of words is generated from the alphabet that you select.</p>
								<Link to='/list' replace className="btn btn-primary">List of Words</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
};

export default Home;