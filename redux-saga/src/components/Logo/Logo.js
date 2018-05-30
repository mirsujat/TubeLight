import React from 'react';

import Logo from '../../assets/images/burger-logo.png';
import Style from './Logo.css';

const logo = props => (
	<div className={Style.Logo} style={{ height: props.height }}>
		<img src={Logo} alt="Burger Logo" />
	</div>
);

export default logo;
