import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
	state = {
		ingredients: {
			salad: 1,
			meat: 1,
			cheese: 1,
			bacon: 1
		}
	};

	componentDidMount() {
		// The URLSearchParams interface defines utility methods to work with the query string of a URL.
		// An object implementing URLSearchParams can directly be used in a for...of structure, instead of entries(): for (var p of mySearchParams) is equivalent to for (var p of mySearchParams.entries())

		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		for (let param of query.entries()) {
			// ['salad', '1']
			ingredients[param[0]] = +param[1];
		}
		this.setState({ ingredients: ingredients });
	}

	checkoutCancelledHandler = () => {
		this.props.history.goBack();
	};

	checkoutContinuedHandler = () => {
		this.props.history.replace('/checkout/contact-info');
	};

	render() {
		return (
			<div>
				<CheckoutSummary
					checkoutCancelled={this.checkoutCancelledHandler}
					checkoutContinued={this.checkoutContinuedHandler}
					ingredients={this.state.ingredients}
				/>
			</div>
		);
	}
}

export default Checkout;
