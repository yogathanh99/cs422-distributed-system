import * as actionTypes from '../actions/actionTypes';

const initState = {
  loading: true,
  messages: [],
  errorMessage: null,
};

const reducers = (state = initState, actions) => {
  switch (actions.type) {
    case actionTypes.GET_MESSAGES_START:
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case actionTypes.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: actions.payload,
      };
    case actionTypes.GET_MESSAGES_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: actions.payload,
      };
    case actionTypes.GET_MESSAGES_END:
      return {
        ...state,
        loading: false,
        errorMessage: null,
      };
    default:
      return state;
  }
};

export default reducers;
