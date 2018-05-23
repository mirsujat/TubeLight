import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactInfo from './ContactInfo/ContactInfo';
//import * as action from '../../store/actions/index';

class Checkout extends Component {
	// With Redux. We can get Ingredients from redux store

	// Without Redux. We can get Ingredients through query params and local state
	// componentWillMount() {
	// 	// The URLSearchParams interface defines utility methods to work with the query string of a URL.
	// 	// An object implementing URLSearchParams can directly be used in a for...of structure, instead of entries(): for (var p of mySearchParams) is equivalent to for (var p of mySearchParams.entries())
	//
	// 	const query = new URLSearchParams(this.props.location.search);
	// 	const ingredients = {};
	// 	let price = 0;
	// 	for (let param of query.entries()) {
	// 		// ['salad', '1']
	// 		if (param[0] === 'price') {
	// 			price = param[1];
	// 		} else {
	// 			ingredients[param[0]] = +param[1];
	// 		}
	// 	}
	// 	this.setState({ ingredients: ingredients, totalPrice: price });
	// }

	checkoutCancelledHandler = () => {
		this.props.history.goBack();
	};

	checkoutContinuedHandler = () => {
		this.props.history.replace('/checkout/contact-info');
	};

	render() {
		let summary = <Redirect to="/" />;
		if (this.props.ings) {
			const purchasedRedirect = this.props.purchased ? (
				<Redirect to="/" />
			) : null;
			summary = (
				<div>
					{purchasedRedirect}
					<CheckoutSummary
						checkoutCancelled={this.checkoutCancelledHandler}
						checkoutContinued={this.checkoutContinuedHandler}
						ingredients={this.props.ings}
					/>
					<Route
						path={this.props.match.path + '/contact-info'}
						component={ContactInfo}
					/>
				</div>
			);
		}
		return summary;
	}
}

const mapStateToProps = state => {
	return {
		ings: state.burgerBuilder.ingredients,
		purchased: state.order.purchased
	};
};

export default connect(mapStateToProps)(Checkout);
