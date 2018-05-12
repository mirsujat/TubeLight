import React from 'react';

import Style from './NavigationItem.css';

const navigationItem = props => (
	<li className={Style.NavigationItem}>
		<a href={props.link} className={props.active ? Style.active : null}>
			{props.children}
		</a>
	</li>
);

export default navigationItem;
