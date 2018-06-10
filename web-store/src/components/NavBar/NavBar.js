import React from 'react';

const navigation = () => {
	return (
		<div className="navbar-fixed">
			<nav>
				<div className="nav-wrapper">
					<a href="" className="brand-logo">
						<i className="large material-icons">group_work</i>SPRINTER
					</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<a href="sass.html">
								<i className="small material-icons left">account_circle</i>Sign
								In <span>|</span> Join Free
							</a>
						</li>

						<li>
							<a href="badges.html">
								<i className="small material-icons left">add_shopping_cart</i>Orders
							</a>
						</li>

						<li>
							<a href="badges.html">
								<i className="small material-icons left">favorite_border</i>Favorites
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default navigation;
