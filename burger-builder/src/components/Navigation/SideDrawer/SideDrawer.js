import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Wrapper from '../../../hoc/Wrapper';
import Style from './SideDrawer.css';

const sideDrawer = props => {
	return (
		<Wrapper>
			<Backdrop show />
			<div className={Style.SideDrawer}>
				<div className={Style.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Wrapper>
	);
};

export default sideDrawer;
