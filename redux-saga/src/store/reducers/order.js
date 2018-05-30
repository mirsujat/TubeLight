import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
	orders: [],
	loading: false,
	purchased: false
};

const purchaseSuccess = (state, action) => {
	const newOrder = updateObject(action.orderData, { id: action.orderId });
	return updateObject(state, {
		loading: false,
		purchased: true,
		orders: state.orders.concat(newOrder)
	});
};

const fetchOrderSuccess = (state, action) => {
	return updateObject(state, {
		orders: action.orders,
		loading: false
	});
};

// Order Reducer
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.PURCHASE_INIT:
			return updateObject(state, { purchased: false });

		case actionTypes.PURCHASE_START:
			return updateObject(state, { loading: true });

		case actionTypes.PURCHASE_SUCCESS:
			return purchaseSuccess(state, action);

		case actionTypes.PURCHASE_FAILED:
			return updateObject(state, { loading: false });

		case actionTypes.FETCH_ORDERS_START:
			return updateObject(state, { loading: true });

		case actionTypes.FETCH_ORDERS_SUCCESS:
			return fetchOrderSuccess(state, action);

		case actionTypes.FETCH_ORDERS_FAILED:
			return updateObject(state, { loading: false });

		default:
			return state;
	}
};

export default reducer;
