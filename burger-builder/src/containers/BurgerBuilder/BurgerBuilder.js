import React, { Component } from 'react';
import { connect } from 'react-redux';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import * as action from '../../store/actions/index';

// to test this container add export infront of class
class BurgerBuilder extends Component {
	state = {
		purchasing: false
	};

	componentDidMount() {
		this.props.initIngredients();
	}

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
			.map(igKey => {
				//igKey is salad, cheese, bacon, meat
				return ingredients[igKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);

		return sum > 0;
	}

	purchaseHandler = () => {
		if (this.props.isAuthenticated) {
			this.setState({ purchasing: true });
		} else {
			this.props.setAuthRedirectPath('/checkout');
			this.props.history.push('/auth');
		}
	};

	purchaseCancelHandler = props => {
		this.setState({ purchasing: false });
	};

	// With redux. Now we can get the ingredients through redux store
	purchaseContinueHandler = () => {
		this.props.initPurchase();
		this.props.history.push('/checkout');
	};

	// Without Redux. we can get the ingredients through local state
	// purchaseContinueHandler = () => {
	// 	const queryParams = [];
	// 	for (let i in this.state.ingredients) {
	// 		queryParams.push(
	// 			encodeURIComponent(i) +
	// 				'=' +
	// 				encodeURIComponent(this.state.ingredients[i])
	// 		);
	// 	}
	// 	queryParams.push('price=' + this.state.totalPrice);
	// 	const queryString = queryParams.join('&');
	// 	this.props.history.push({
	// 		pathname: '/checkout',
	// 		search: '?' + queryString
	// 	});
	// };

	render() {
		const disabledInfo = { ...this.props.ings };
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		// Now the initial state Obj should look like
		// { salad: false, cheese: false, meat: false, bacon: false }

		let orderSummary = null;

		let burger = this.props.error ? (
			<p>Ingredients can't be loaded!!</p>
		) : (
			<Spinner />
		);

		if (this.props.ings) {
			burger = (
				<Wrapper>
					<Burger ingredients={this.props.ings} />
					<BuildControls
						addIngredient={this.props.onIngredientAdded}
						removeIngredient={this.props.onIngredientRemoved}
						disabled={disabledInfo}
						price={this.props.price}
						purchaseable={this.updatePurchaseState(this.props.ings)}
						isAuth={this.props.isAuthenticated}
						order={this.purchaseHandler}
					/>
				</Wrapper>
			);
			orderSummary = (
				<OrderSummary
					ingredients={this.props.ings}
					price={this.props.price}
					purchaseCancel={this.purchaseCancelHandler}
					purchaseContinue={this.purchaseContinueHandler}
				/>
			);
		}

		return (
			<Wrapper>
				{burger}
				<Modal
					show={this.state.purchasing}
					modalClosed={this.purchaseCancelHandler}>
					{orderSummary}
				</Modal>
			</Wrapper>
		);
	}
}

const mapStateToProps = state => {
	return {
		ings: state.burgerBuilder.ingredients,
		price: state.burgerBuilder.totalPrice,
		error: state.burgerBuilder.error,
		isAuthenticated: state.auth.token !== null
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onIngredientAdded: ingName => dispatch(action.addIngredient(ingName)),
		onIngredientRemoved: ingName => dispatch(action.removeIngredient(ingName)),
		initIngredients: () => dispatch(action.initIngredients()),
		initPurchase: () => dispatch(action.purchaseInit()),
		setAuthRedirectPath: path => dispatch(action.setAuthRedirectPath(path))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(
	withErrorHandler(BurgerBuilder, axios)
);
