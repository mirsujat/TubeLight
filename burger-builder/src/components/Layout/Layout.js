import React from 'react';

import Wrapper from '../../hoc/Wrapper';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Style from './Layout.css';

const layout = props => (
	<Wrapper>
		<Toolbar />
		<main className={Style.Content}>{props.children}</main>
	</Wrapper>
);

export default layout;
