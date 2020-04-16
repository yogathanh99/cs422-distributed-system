import * as actionTypes from './actionTypes';
import axios from 'axios';

const PORT = '192.168.100.6';
const URL = `http://${PORT}:4000/api/v1/messages/`;

export const fetchMessages = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_MESSAGES_START });

  await axios
    .get(URL)
    .then((res) => {
      dispatch({
        type: actionTypes.GET_MESSAGES_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({ type: actionTypes.GET_MESSAGES_FAIL, payload: err.message });
    });
  dispatch({ type: actionTypes.GET_MESSAGES_END });
};

export const createMessage = (data) => async (dispatch) => {
  dispatch({ type: actionTypes.POST_MESSAGE_START });

  await axios
    .post(URL, data)
    .then((res) => {
      dispatch({
        type: actionTypes.POST_MESSAGE_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({ type: actionTypes.POST_MESSAGE_FAIL, payload: err.message });
    });
  dispatch({ type: actionTypes.POST_MESSAGE_END });
};

export const fetchMessage = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.GET_MESSAGE_START });

  await axios
    .get(URL + id)
    .then((res) => {
      dispatch({
        type: actionTypes.GET_MESSAGE_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({ type: actionTypes.GET_MESSAGE_FAIL, payload: err.message });
    });
  dispatch({ type: actionTypes.GET_MESSAGE_END });
};
