import { authActionTypes } from "./actionType";

const initalState = {
  loading: false,
  error: false,
  isAuth: false,
  token: "",
  res: "",
  errMessage: "",
};

export const registerReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case authActionTypes.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        res: "",
        errMessage: "",
      };
    case authActionTypes.REGISTER_SUCCESS:
      console.log(payload, "auth");
      return {
        ...state,
        loading: false,
        error: null,
        res: payload,
        errMessage: "",
      };
    case authActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        res: "",
        errMessage: payload,
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
        errMessage: "",
      };
    case authActionTypes.LOGIN_SUCCESS:
      console.log(payload, "auth");
      return {
        ...state,
        loading: false,
        token: payload,
        error: null,
        errMessage: "",
      };
    case authActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        token: "",
        error: true,
        errMessage: payload,
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
