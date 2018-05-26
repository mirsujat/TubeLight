import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as action from './store/actions/index';

class App extends Component {
	componentDidMount() {
		this.props.tryAutoLogin();
	}

	render() {
		let routes = (
			<switch>
				<Route path="/auth" component={Auth} />
				<Route path="/" exact component={BurgerBuilder} />
				<Redirect to="/" />
			</switch>
		);
		if (this.props.isAuthenticated) {
			routes = (
				<switch>
					<Route path="/checkout" component={Checkout} />
					<Route path="/orders" component={Orders} />
					<Route path="/logout" component={Logout} />
					<Route path="/" exact component={BurgerBuilder} />
					<Redirect to="/" />
				</switch>
			);
		}
		return (
			<div>
				<Layout>{routes}</Layout>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null
	};
};

const mapDispatchToProps = dispatch => {
	return {
		tryAutoLogin: () => dispatch(action.authCheckState())
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
