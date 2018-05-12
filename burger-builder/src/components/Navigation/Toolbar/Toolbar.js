import React from 'react';

import Style from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = props => (
	<header className={Style.Toolbar}>
		<div>MENU</div>

		<div className={Style.Logo}>
			<Logo />
		</div>

		<nav className={Style.DesktopOnly}>
			<NavigationItems />
		</nav>
	</header>
);

export default toolbar;
