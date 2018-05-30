import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
	ingredients: null,
	totalPrice: 4,
	error: false,
	building: false
};

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
};

const addIngredient = (state, action) => {
	const updatedIngredient = {
		[action.ingredientName]: state.ingredients[action.ingredientName] + 1
	};
	const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
	const updatedState = {
		ingredients: updatedIngredients,
		totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
		building: true
	};
	return updateObject(state, updatedState);
};

const setIngredient = (state, action) => {
	return updateObject(state, {
		ingredients: action.ingredients,
		totalPrice: 4,
		error: false,
		building: false
	});
};

// Burger Builder Reducer
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_INGREDIENT:
			return addIngredient(state, action);

		case actionTypes.REMOVE_INGREDIENT:
			return {
				...state,
				ingredients: {
					...state.ingredients,
					[action.ingredientName]: state.ingredients[action.ingredientName] - 1
				},
				totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
				building: true
			};

		case actionTypes.SET_INGREDIENTS:
			return setIngredient(state, action);

		case actionTypes.FETCH_INGREDIENTS_FAILED:
			return updateObject(state, { error: true });

		default:
			return state;
	}
};

export default reducer;
