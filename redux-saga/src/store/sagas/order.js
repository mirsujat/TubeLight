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

export function* fetchOrdersSaga(action) {
	yield put(actions.fetchOrdersStart());
	const queryParams =
		'?auth=' +
		action.token +
		'&orderBy="userId"&equalTo="' +
		action.userId +
		'"';

	try {
		const response = yield axios.get('/orders.json' + queryParams);
		// Important convert Object to Array
		// This will turn order Object into an array
		const fetchedOrders = [];
		for (let key in response.data) {
			fetchedOrders.push({
				...response.data[key],
				id: key
			});
		}
		yield put(actions.fetchOrdersSuccess(fetchedOrders));
	} catch (error) {
		yield put(actions.fetchOrdersFailed(error));
	}
}
