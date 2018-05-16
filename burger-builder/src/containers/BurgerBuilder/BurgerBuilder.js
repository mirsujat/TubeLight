import React, { Component } from 'react';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
};

class BurgerBuilder extends Component {
	// constructor(props) {
	//   super(props);
	//    this.state = { ... }
	// }
	state = {
		ingredients: null,
		totalPrice: 4,
		purchaseable: false,
		purchasing: false,
		loading: false,
		error: false
	};

	componentDidMount() {
		axios
			.get('https://build-burger-c3801.firebaseio.com/ingredients.json')
			.then(response => {
				this.setState({ ingredients: response.data });
			})
			.catch(error => {
				this.setState({ error: true });
			});
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

		this.setState({ purchaseable: sum > 0 });
	}

	addIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });

		this.updatePurchaseState(updatedIngredients);
	};

	removeIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];

		if (oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });

		this.updatePurchaseState(updatedIngredients);
	};

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	purchaseCancelHandler = props => {
		this.setState({ purchasing: false });
	};

	purchaseContinueHandler = () => {
		// this.setState({ loading: true });
		// const order = {
		// 	ingredients: this.state.ingredients,
		// 	price: this.state.totalPrice,
		// 	customer: {
		// 		name: 'Mir Sujat',
		// 		address: {
		// 			street: 'Test Street 02',
		// 			zipCode: 6754,
		// 			country: 'Bangladesh'
		// 		},
		// 		email: 'test@test.com'
		// 	},
		// 	deliveryMethod: 'fastest'
		// };
		//
		// axios
		// 	.post('/orders.json', order)
		// 	.then(response => {
		// 		this.setState({ loading: false, purchasing: false });
		// 	})
		// 	.catch(error => {
		// 		this.setState({ loading: false, purchasing: false });
		// 	});
		this.props.history.push('/checkout');
	};

	render() {
		const disabledInfo = { ...this.state.ingredients };
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		// Now the initial state Obj should look like
		// { salad: false, cheese: false, meat: false, bacon: false }

		let orderSummary = null;

		let burger = this.state.error ? (
			<p>Ingredients can't be loaded!!</p>
		) : (
			<Spinner />
		);

		if (this.state.ingredients) {
			burger = (
				<Wrapper>
					<Burger ingredients={this.state.ingredients} />
					<BuildControls
						addIngredient={this.addIngredientHandler}
						removeIngredient={this.removeIngredientHandler}
						disabled={disabledInfo}
						price={this.state.totalPrice}
						purchaseable={this.state.purchaseable}
						order={this.purchaseHandler}
					/>
				</Wrapper>
			);
			orderSummary = (
				<OrderSummary
					ingredients={this.state.ingredients}
					price={this.state.totalPrice}
					purchaseCancel={this.purchaseCancelHandler}
					purchaseContinue={this.purchaseContinueHandler}
				/>
			);
		}
		if (this.state.loading) {
			orderSummary = <Spinner />;
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

export default withErrorHandler(BurgerBuilder, axios);
