import * as actionTypes from '../actions/actionTypes';

const initState = {
  loading: false,
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
    case actionTypes.POST_MESSAGE_START:
      return {
        ...state,
        errorMessage: null,
      };
    case actionTypes.POST_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: [...state.messages, actions.payload],
      };
    case actionTypes.POST_MESSAGE_FAIL:
      return {
        ...state,
        errorMessage: actions.payload,
      };
    case actionTypes.POST_MESSAGE_END:
      return {
        ...state,
        errorMessage: null,
      };
    case actionTypes.UPDATE_MESSAGE_START:
      return {
        ...state,
        errorMessage: null,
      };
    case actionTypes.UPDATE_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: state.messages.map((x) =>
          x._id === actions.payload._id ? actions.payload : x,
        ),
      };
    case actionTypes.UPDATE_MESSAGE_FAIL:
      return {
        ...state,
        errorMessage: actions.payload,
      };
    case actionTypes.UPDATE_MESSAGE_END:
      return {
        ...state,
        errorMessage: null,
      };
    case actionTypes.DELETE_MESSAGE_START:
      return {
        ...state,
        errorMessage: null,
      };
    case actionTypes.DELETE_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: state.messages.filter((x) => x._id !== actions.payload),
      };
    case actionTypes.DELETE_MESSAGE_FAIL:
      return {
        ...state,
        errorMessage: actions.payload,
      };
    case actionTypes.DELETE_MESSAGE_END:
      return {
        ...state,
        errorMessage: null,
      };
    default:
      return state;
  }
};

export default reducers;
