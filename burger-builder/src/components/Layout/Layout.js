import React from 'react';

import Wrapper from '../../hoc/Wrapper';
import Style from './Layout.css';

const layout = props => (
	<Wrapper>
		<div>Toolbar, SideDrawer, Backdrop</div>
		<main className={Style.Content}>{props.children}</main>
	</Wrapper>
);

export default layout;
