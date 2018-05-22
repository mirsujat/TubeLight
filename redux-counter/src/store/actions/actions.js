export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
	return {
		type: INCREMENT
	};
};

export const decrement = () => {
	return {
		type: DECREMENT
	};
};

export const add = value => {
	return {
		type: ADD,
		val: value
	};
};

export const subtract = value => {
	return {
		type: SUBTRACT,
		val: value
	};
};

export const storeResult = res => {
	return {
		type: STORE_RESULT,
		result: res
	};
};

export const deleteResult = resEId => {
	return {
		type: DELETE_RESULT,
		resultElementId: resEId
	};
};
