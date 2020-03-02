import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home, About, Contact, Blog, Projects } from "../pages";

import { Menu } from "../components";

const App = () => {
	return (
		<Router>
			<div>
				<Menu />

				<hr />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/projects">
						<Projects />
					</Route>
					<Route path="/blog">
						<Blog />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
