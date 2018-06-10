import React from 'react';

const navigation = () => {
	return (
		<nav>
			<div className="nav-wrapper">
				<a href="/" className="brand-logo">
					<img
						src="./assets/logo/Pirelli-logo.png"
						className="brand-logo"
						alt="Brand Logo"
					/>
				</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li>
						<a href="sass.html">Sass</a>
					</li>
					<li>
						<span>|</span>
					</li>
					<li>
						<a href="badges.html">Components</a>
					</li>
					<li>
						<span>|</span>
					</li>
					<li>
						<a href="collapsible.html">JavaScript</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default navigation;
