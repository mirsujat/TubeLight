import React from 'react';

import Style from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = props => (
	<header className={Style.Toolbar}>
		<DrawerToggle clicked={props.drawerToggleClicked} />

		<div className={Style.Logo}>
			<Logo />
		</div>

		<nav className={Style.DesktopOnly}>
			<NavigationItems isAuthenticated={props.isAuth} />
		</nav>
	</header>
);

export default toolbar;
