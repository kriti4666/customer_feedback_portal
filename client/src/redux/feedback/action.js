import axios from "axios";
import { feedbackActionTypes } from "./actionType";

export const getfeedback = (token) => async (dispatch) => {
  try {
    dispatch({ type: feedbackActionTypes.FEEDBACK_LIST_REQUEST });
    let response = await axios.get(
      "https://basal-backend.onrender.com/feedback/",
      {
        headers: {
          Authorization: `Bearer ${token}`, // Set the Authorization header with the token
        },
      }
    );
    const { data } = response;
    if (data.length !== 0) {
      dispatch({
        type: feedbackActionTypes.FEEDBACK_LIST_SUCCESS,
        payload: data.result,
      });
    } else {
      dispatch({
        type: feedbackActionTypes.FEEDBACK_LIST_FAILURE,
        payload: "Not data Found" || response.data,
      });
    }
  } catch (error) {
    dispatch({ type: feedbackActionTypes.FEEDBACK_LIST_FAILURE });
  }
};

export const addFeedback = (formData, token) => async (dispatch) => {
  try {
    dispatch({ type: feedbackActionTypes.POST_FEEDBACK_REQUEST });
    let response = await axios.post(
      "https://basal-backend.onrender.com/feedback/create",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const { data } = response;
    if (data.length !== 0) {
      dispatch({
        type: feedbackActionTypes.POST_FEEDBACK_SUCCESS,
        payload: data.result,
      });
    } else {
      dispatch({
        type: feedbackActionTypes.POST_FEEDBACK_FAILURE,
        payload: "Failed to Add" || response.data,
      });
    }
  } catch (error) {
    dispatch({
      type: feedbackActionTypes.POST_FEEDBACK_FAILURE,
      payload: error.message,
    });
  }
};
export const updateFeedback = (updateData, id, token) => async (dispatch) => {
  // console.log(updateData, id, token);
  try {
    dispatch({ type: feedbackActionTypes.UPDATE_FEEDBACK_REQUEST });
    let response = await axios.put(
      `https://basal-backend.onrender.com/feedback/update/${id}`,
      updateData,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Set the Authorization header with the token
        },
      }
    );
    const { data } = response;
    if (data) {
      dispatch({
        type: feedbackActionTypes.UPDATE_FEEDBACK_SUCCESS,
        payload: data.result,
      });
    } else {
      dispatch({
        type: feedbackActionTypes.UPDATE_FEEDBACK_FAILURE,
        payload: "Failed to Update" || response.data,
      });
    }
  } catch (error) {
    dispatch({
      type: feedbackActionTypes.UPDATE_FEEDBACK_FAILURE,
      payload: error.message,
    });
  }
};
export const deleteFeedback = (id, token) => async (dispatch) => {
  console.log(id, token);
  try {
    dispatch({ type: feedbackActionTypes.DELETE_FEEDBACK_REQUEST });
    let response = await axios.delete(
      `https://basal-backend.onrender.com/feedback/delete/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Set the Authorization header with the token
        },
      }
    );
    const { data } = response;
    if (data) {
      dispatch({
        type: feedbackActionTypes.DELETE_FEEDBACK_SUCCESS,
        payload: data.result,
      });
    } else {
      dispatch({
        type: feedbackActionTypes.DELETE_FEEDBACK_FAILURE,
        payload: "Failed to Delete" || response.data,
      });
    }
  } catch (error) {
    dispatch({
      type: feedbackActionTypes.DELETE_FEEDBACK_FAILURE,
      payload: error.message,
    });
  }
};
