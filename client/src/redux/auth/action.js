import axios from "axios";
import { authActionTypes } from "./actionType";



export const registerUser = (formData) => async (dispatch) => {
  try {
    dispatch({ type: authActionTypes.REGISTER_REQUEST });
    let response = await axios.post(
      "https://basal-backend.onrender.com/user/register",
      formData
    );

    if (response.status === 200) {
      dispatch({
        type: authActionTypes.REGISTER_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({
        type: authActionTypes.REGISTER_FAILURE,
        payload: "User already exists!",
      });
    }
  } catch (error) {
    dispatch({
      type: authActionTypes.REGISTER_FAILURE,
      payload: error.message || "An error occurred",
    });
  }
};

export const authenticate = (loginCred) => async (dispatch) => {
  try {
    dispatch({ type: authActionTypes.LOGIN_REQUEST });
    let response = await axios.post(
      "https://basal-backend.onrender.com/user/login",
      loginCred
    );
    console.log(response);
    if (response.data.token) {
      dispatch({
        type: authActionTypes.LOGIN_SUCCESS,
        payload: response.data.token,
      });
    } else {
      dispatch({ type: authActionTypes.LOGIN_FAILURE, payload: "User Not Found!" || response.data });
    }
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    dispatch({
      type: authActionTypes.LOGIN_FAILURE,
      payload: error.message || "An error occurred",
    });
  }
};

export const Logout = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: authActionTypes.LOGOUT_REQ });
};
