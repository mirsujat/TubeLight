import React from 'react';

import Wrapper from '../../hoc/Wrapper';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Style from './Layout.css';

const layout = props => (
	<Wrapper>
		<Toolbar />
		<SideDrawer />
		<main className={Style.Content}>{props.children}</main>
	</Wrapper>
);

export default layout;
