import { put } from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actions from '../actions/index';

export function* purchaseBurgerSaga(action) {
	yield put(actions.purchaseStart());
	try {
		const response = yield axios.post(
			'/orders.json?auth=' + action.token,
			action.orderData
		);
		yield put(actions.purchaseSuccess(response.data.name, action.orderData));
	} catch (error) {
		yield put(actions.purchaseFailed(error));
	}
}
