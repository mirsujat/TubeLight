import React from 'react';

import Style from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
	<ul className={Style.NavigationItems}>
		<NavigationItem link="/" exact>
			Burger Builder
		</NavigationItem>
		<NavigationItem link="/orders">Orders</NavigationItem>
		<NavigationItem link="/auth">Authenticate</NavigationItem>
	</ul>
);

export default navigationItems;
