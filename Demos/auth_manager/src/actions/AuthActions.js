import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { EMAIL_CHANGED, PASSWORD_CHANGED, LONGIN_SUCCESS, LOGIN_FAIL, LOGIN_USER } from './types';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LONGIN_SUCCESS,
    payload: user
  });

  Actions.main();
};
