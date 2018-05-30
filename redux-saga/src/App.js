import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import * as action from './store/actions/index';

// Lazy Loading
const asyncCheckout = asyncComponent(() => {
	return import('./containers/Checkout/Checkout');
});

// Lazy Loading
const asyncOrders = asyncComponent(() => {
	return import('./containers/Orders/Orders');
});

// Lazy Loading
const asyncAuth = asyncComponent(() => {
	return import('./containers/Auth/Auth');
});

class App extends Component {
	componentDidMount() {
		this.props.tryAutoLogin();
	}

	render() {
		let routes = (
			<Switch>
				<Route path="/auth" component={asyncAuth} />
				<Route path="/" exact component={BurgerBuilder} />
				<Redirect to="/" />
			</Switch>
		);
		if (this.props.isAuthenticated) {
			routes = (
				<Switch>
					<Route path="/checkout" component={asyncCheckout} />
					<Route path="/orders" component={asyncOrders} />
					<Route path="/logout" component={Logout} />
					<Route path="/auth" component={asyncAuth} />
					<Route path="/" exact component={BurgerBuilder} />
					<Redirect to="/" />
				</Switch>
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
