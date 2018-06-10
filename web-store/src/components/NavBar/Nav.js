import React from 'react';

const navigation = () => {
	return (
		<div className="nav-wrapper secondary-nav">
			<ul id="nav-mobile" className="center hide-on-med-and-down">
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
	);
};

export default navigation;
