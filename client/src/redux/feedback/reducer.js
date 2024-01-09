import { authActionTypes, feedbackActionTypes } from "./actionType";

const initalState = {
  loading: false,
  error: false,
  res: [],
  data: "",
  errMessage: "",
};

export const feedbackListReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case feedbackActionTypes.FEEDBACK_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        res: [],
        errMessage: "",
      };
    case feedbackActionTypes.FEEDBACK_LIST_SUCCESS:
      console.log(payload, "auth.");
      return {
        ...state,
        loading: false,
        error: false,
        res: payload,
        errMessage: "",
      };
    case feedbackActionTypes.FEEDBACK_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        res: [],
        errMessage: payload,
      };

    default:
      return state;
  }
};

export const feedbackCreateReducer = (
  state = initalState,
  { type, payload }
) => {
  switch (type) {
    case feedbackActionTypes.POST_FEEDBACK_FAILURE:
      return {
        ...state,
        loading: true,
        error: false,
        data: "",
        errMessage: "",
      };
    case feedbackActionTypes.POST_FEEDBACK_SUCCESS:
      console.log(payload, "auth");
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
        errMessage: "",
      };
    case feedbackActionTypes.POST_FEEDBACK_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: "",
        errMessage: payload,
      };

    default:
      return state;
  }
};

export const feedbackUpdateReducer = (
  state = initalState,
  { type, payload }
) => {
  switch (type) {
    case feedbackActionTypes.UPDATE_FEEDBACK_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        errMessage: "",
        data: "",
      };
    case feedbackActionTypes.UPDATE_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errMessage: "",
        data: payload,
      };
    case feedbackActionTypes.UPDATE_FEEDBACK_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errMessage: payload,
        data: "",
      };

    default:
      return state;
  }
};
export const feedbackDeleteReducer = (
  state = initalState,
  { type, payload }
) => {
  switch (type) {
    case feedbackActionTypes.DELETE_FEEDBACK_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        data: "",
        errMessage: "",
      };
    case feedbackActionTypes.DELETE_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errMessage: "",
        data: payload,
      };
    case feedbackActionTypes.DELETE_FEEDBACK_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errMessage: payload,
        data: "",
      };

    default:
      return state;
  }
};
