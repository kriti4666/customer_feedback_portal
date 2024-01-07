import { authActionTypes } from "./actionType";

const initalState = {
  loading: false,
  error: false,
  isAuth: false,
  token: "",
  res: ""
};

export const registerReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case authActionTypes.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        res: ""
      };
    case authActionTypes.REGISTER_SUCCESS:
      console.log(payload, "auth");
      return {
        ...state,
        loading: false,
        error: null,
        res: payload
      };
    case authActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        res: ""
      };
    
    default:
      return state;
  }
};

export const loginReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case authActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        isAuth: false,
      };
    case authActionTypes.LOGIN_SUCCESS:
      console.log(payload, "auth");
      return {
        ...state,
        loading: false,
        token: payload,
        error: null,
      };
    case authActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        token: "",
        error: true,
      };
    case authActionTypes.LOGOUT_REQ:
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        token: "",
        error: null,
      };
    default:
      return state;
  }
};
