import React from 'react';
import { NavLink } from 'react-router-dom';

import Style from './NavigationItem.css';

const navigationItem = props => (
	<li className={Style.NavigationItem}>
		<NavLink to={props.link} exact={props.exact} activeClassName={Style.active}>
			{props.children}
		</NavLink>
	</li>
);

export default navigationItem;
