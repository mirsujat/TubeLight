import { UI_START_LOADING, UI_STOP_LOADING } from '../actions/actionTypes';

const initialState = {
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (expression) {
    case UI_START_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case UI_START_LOADING:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
