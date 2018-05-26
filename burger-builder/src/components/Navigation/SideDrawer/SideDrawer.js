import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Wrapper from '../../../hoc/Wrapper/Wrapper';
import Style from './SideDrawer.css';

const sideDrawer = props => {
	let attachedStyle = [Style.SideDrawer, Style.Close];

	if (props.open) {
		attachedStyle = [Style.SideDrawer, Style.Open];
	}

	return (
		<Wrapper>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedStyle.join(' ')} onClick={props.closed}>
				<div className={Style.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems isAuthenticated={props.isAuth} />
				</nav>
			</div>
		</Wrapper>
	);
};

export default sideDrawer;
