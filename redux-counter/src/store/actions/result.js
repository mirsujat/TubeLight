import * as actionTypes from './actionTypes';

const saveResult = res => {
	return {
		type: actionTypes.STORE_RESULT,
		result: res
	};
};

export const storeResult = res => {
	return dispatch => {
		setTimeout(() => {
			dispatch(saveResult(res));
		}, 2000);
	};
};

export const deleteResult = resEId => {
	return {
		type: actionTypes.DELETE_RESULT,
		resultElementId: resEId
	};
};
