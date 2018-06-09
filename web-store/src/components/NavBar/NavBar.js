import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

const navigation = () => {
	return (
		<Navbar brand="./assets/logo/Pirelli-logo.png" right>
			<NavItem onClick={() => console.log('test click')}>
				Getting started
			</NavItem>
			<NavItem href="">Components</NavItem>
		</Navbar>
	);
};

export default navigation;
