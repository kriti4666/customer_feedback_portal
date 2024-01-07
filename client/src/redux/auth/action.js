import axios from "axios";
import { authActionTypes } from "./actionType";

export const registerUser = (formData) => async (dispatch) => {
  console.log(formData, "cred");
  try {
    dispatch({ type: authActionTypes.REGISTER_REQUEST });
    let response = await axios.post(
      "https://basal-backend.onrender.com/user/register",
      formData
    );
    console.log(response);
    if (response) {
      dispatch({
        type: authActionTypes.REGISTER_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    dispatch({ type: authActionTypes.REGISTER_FAILURE });
  }
};
export const authenticate = (loginCred) => async (dispatch) => {
  console.log(loginCred, "cred");
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
    }
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    dispatch({ type: authActionTypes.LOGIN_FAILURE });
  }
};

export const Logout = () => async (dispatch) => {
  // REMOVE_LOCAL("login_data");
  localStorage.removeItem("token");
  dispatch({ type: authActionTypes.LOGOUT_REQ });
};
