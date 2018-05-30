import { put } from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actions from '../actions/index';

export function* initIngredientsSaga(action) {
	try {
		const response = yield axios.get(
			'https://build-burger-c3801.firebaseio.com/ingredients.json'
		);
		yield put(actions.setIngredients(response.data));
	} catch (error) {
		yield put(actions.fetchIngredientsFailed());
	}
}
