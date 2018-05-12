import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Style from './SideDrawer.css';

const sideDrawer = props => {
	return (
		<div className={Style.SideDrawer}>
			<Logo />
			<nav>
				<NavigationItems />
			</nav>
		</div>
	);
};

export default sideDrawer;
