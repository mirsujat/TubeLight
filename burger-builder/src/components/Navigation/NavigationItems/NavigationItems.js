import React from 'react';

import Style from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
	<ul className={Style.NavigationItems}>
		<NavigationItem link="/" active>
			Burger Builder
		</NavigationItem>
		<NavigationItem link="/">Checkout</NavigationItem>
	</ul>
);

export default navigationItems;
