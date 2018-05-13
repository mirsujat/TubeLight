import React, { Component } from 'react';

import Wrapper from '../Wrapper/Wrapper';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Style from './Layout.css';

class Layout extends Component {
	state = {
		showSideDrawer: false
	};

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	sideDrawerToggleHandler = () => {
		this.setState(prevState => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	};

	render() {
		return (
			<Wrapper>
				<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
				<SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
				<main className={Style.Content}>{this.props.children}</main>
			</Wrapper>
		);
	}
}

export default Layout;
