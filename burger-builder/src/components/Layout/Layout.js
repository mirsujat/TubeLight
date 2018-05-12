import React, { Component } from 'react';

import Wrapper from '../../hoc/Wrapper';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Style from './Layout.css';

class Layout extends Component {
	state = {
		showSideDrawer: true
	};

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	render() {
		return (
			<Wrapper>
				<Toolbar />
				<SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
				<main className={Style.Content}>{this.props.children}</main>
			</Wrapper>
		);
	}
}

export default Layout;
