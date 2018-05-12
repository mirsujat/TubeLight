import React from 'react';

import Style from './Toolbar.css';

const toolbar = props => (
	<header className={Style.Toolbar}>
		<div>MENU</div>
		<div>LOGO</div>
		<nav>Nav Links ... </nav>
	</header>
);

export default toolbar;
