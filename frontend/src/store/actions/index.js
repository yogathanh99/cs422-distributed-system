import * as actionTypes from './actionTypes';
import axios from 'axios';

const URL = `http://localhost:4000/api/v1/messages/`;

export const fetchMessages = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_MESSAGES_START });

  await axios
    .get(URL)
    .then((res) => {
      dispatch({
        type: actionTypes.GET_MESSAGES_SUCCESS,
        payload: res.data.data.messages,
      });
    })
    .catch((err) => {
      dispatch({ type: actionTypes.GET_MESSAGES_FAIL, payload: err.message });
    });
  dispatch({ type: actionTypes.GET_MESSAGES_END });
};

export const createMessage = (data, onSuccess) => async (dispatch) => {
  dispatch({ type: actionTypes.POST_MESSAGE_START });

  await axios
    .post(URL, data)
    .then((res) => {
      dispatch({
        type: actionTypes.POST_MESSAGE_SUCCESS,
        payload: res.data.data.message,
      });
      onSuccess();
    })
    .catch((err) => {
      dispatch({ type: actionTypes.POST_MESSAGE_FAIL, payload: err.message });
    });
  dispatch({ type: actionTypes.POST_MESSAGE_END });
};

export const updateMessage = (id, data, onSuccess) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_MESSAGE_START });

  await axios
    .patch(URL + id, data)
    .then((res) => {
      dispatch({
        type: actionTypes.UPDATE_MESSAGE_SUCCESS,
        payload: res.data.data.message,
      });
      onSuccess();
    })
    .catch((err) => {
      dispatch({ type: actionTypes.UPDATE_MESSAGE_FAIL, payload: err.message });
    });

  dispatch({ type: actionTypes.UPDATE_MESSAGE_END });
};

export const deleteMessage = (id, onSuccess) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_MESSAGE_START });

  await axios
    .delete(URL + id)
    .then(() => {
      dispatch({ type: actionTypes.DELETE_MESSAGE_SUCCESS, payload: id });
      onSuccess();
    })
    .catch((err) =>
      dispatch({ type: actionTypes.DELETE_MESSAGE_FAIL, payload: err.message }),
    );

  dispatch({ type: actionTypes.DELETE_MESSAGE_END });
};
