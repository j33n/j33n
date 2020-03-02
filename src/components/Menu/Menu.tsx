import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
	return (
		<div className="card">
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/blog">Blog</Link></li>
				<li><Link to="/projects">Projects</Link></li>
				<li><Link to="/contact">Contact</Link></li>
			</ul>
		</div>
	);
};

export default Card;
