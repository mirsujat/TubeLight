import React from 'react';

import Style from './Toolbar.css';
import Logo from '../../Logo/Logo';

const toolbar = props => (
	<header className={Style.Toolbar}>
		<div>MENU</div>
		<Logo />
		<nav>Nav Links ... </nav>
	</header>
);

export default toolbar;
