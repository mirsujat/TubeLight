import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseSuccess = (id, orderData) => {
	return {
		type: actionTypes.PURCHASE_SUCCESS,
		orderId: id,
		orderData: orderData
	};
};

export const purchaseFailed = error => {
	return {
		type: actionTypes.PURCHASE_FAILED,
		error: error
	};
};

export const purchaseStart = () => {
	return {
		type: actionTypes.PURCHASE_START
	};
};

export const purchaseBurger = orderData => {
	return dispatch => {
		dispatch(purchaseStart());
		axios
			.post('/orders.json', orderData)
			.then(response => {
				dispatch(purchaseSuccess(response.data.name, orderData));
			})
			.catch(error => {
				dispatch(purchaseFailed(error));
			});
	};
};

export const purchaseInit = () => {
	return {
		type: actionTypes.PURCHASE_INIT
	};
};

export const fetchOrdersSuccess = orders => {
	return {
		type: actionTypes.FETCH_ORDERS_SUCCESS,
		orders: orders
	};
};

export const fetchOrdersFailed = error => {
	return {
		type: actionTypes.FETCH_ORDERS_FAILED,
		error: error
	};
};

export const fetchOrdersStart = () => {
	return {
		type: actionTypes.FETCH_ORDERS_START
	};
};

export const fetchOrders = () => {
	return dispatch => {
		dispatch(fetchOrdersStart());
		axios
			.get('/orders.json')
			.then(res => {
				// Important convert Object to Array
				// This will turn order Object into an array
				const fetchedOrders = [];
				for (let key in res.data) {
					fetchedOrders.push({
						...res.data[key],
						id: key
					});
				}
				dispatch(fetchOrdersSuccess(fetchedOrders));
			})
			.catch(error => {
				dispatch(fetchOrdersFailed(error));
			});
	};
};
