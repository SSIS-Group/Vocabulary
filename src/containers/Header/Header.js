import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className="navbar navbar-expand-md bg-dark navbar-dark">
			<Link to='/' replace className='navbar-brand'>Vocabulary App</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="collapsibleNavbar">
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link exact to='/' replace className="nav-link" activeClassName='active'>Home</Link>
					</li>
					<li className="nav-item">
						<Link to='/single' replace className="nav-link" activeClassName='active'>Single Word</Link>
					</li>
					<li className="nav-item">
						<Link to='/list' replace className="nav-link" activeClassName='active'>List of Words</Link>
					</li>
					<li className="nav-item">
						<Link to='/about' replace className="nav-link" activeClassName='active'>About</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;