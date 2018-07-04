import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<footer className='fixed-bottom'>
			<div className="container" id="bottom">
				<p style={{"display":"inline-block", "margin":"0px"}}>&copy;Tejas Nanaware</p>
			</div>
		</footer>
	);
};

export default Footer;