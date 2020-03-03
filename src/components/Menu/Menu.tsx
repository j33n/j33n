import React from "react";
import { Link } from "react-router-dom";

import { Logo, githubIcon } from '../../assets'

import './Menu.scss';

const Card = () => {
	return (
		<div className="menu">
			<div className="links-left">
				<span><Link to="/about">About</Link></span>
				{/* <span><Link to="/blog">Blog</Link></span> */}
			</div>
			<div className="logo">
				<span><Link to="/"><img src={Logo} alt="" /></Link></span>
			</div>
			<div className="links-right">
				{/* <span><Link to="/projects">Projects</Link></span> */}
				<span><Link to="/contact">Contact</Link></span>
			</div>
			<div className="repo">
				<a href="https://github.com/j33n" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="" /></a>
			</div>
		</div>
	);
};

export default Card;
