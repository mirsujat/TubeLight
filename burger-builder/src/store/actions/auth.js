import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START
	};
};

export const authSuccess = (token, userId) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		idToken: token,
		userId: userId
	};
};

export const authFailed = error => {
	return {
		type: actionTypes.AUTH_FAILED,
		error: error
	};
};

export const auth = (email, password, isSignup) => {
	return dispatch => {
		dispatch(authStart());
		const authData = {
			email: email,
			password: password,
			returnSecureToken: true
		};
		let url =
			'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA67AGMthchZLAZpG0eIXn7dAjnNaKyrvY';
		if (!isSignup) {
			url =
				'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyA67AGMthchZLAZpG0eIXn7dAjnNaKyrvY';
		}
		axios
			.post(url, authData)
			.then(response => {
				console.log(response);
				dispatch(authSuccess(response.data.idToken, response.data.localId));
			})
			.catch(err => {
				console.log(err);
				dispatch(authFailed(err.response.data.error));
			});
	};
};
