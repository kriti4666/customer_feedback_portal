import { authActionTypes, feedbackActionTypes } from "./actionType";

const initalState = {
  loading: false,
  error: false,
  res: [],
  data: ""
};

export const feedbackListReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case feedbackActionTypes.FEEDBACK_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        res: [],
      };
    case feedbackActionTypes.FEEDBACK_LIST_SUCCESS:
      console.log(payload, "auth");
      return {
        ...state,
        loading: false,
        error: false,
        res: payload
      };
    case feedbackActionTypes.FEEDBACK_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        res: []
      };
    
    default:
      return state;
  }
};


export const feedbackCreateReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case feedbackActionTypes.POST_FEEDBACK_FAILURE:
      return {
        ...state,
        loading: true,
        error: false,
        res: [],
        data: ""
      };
    case feedbackActionTypes.POST_FEEDBACK_SUCCESS:
      console.log(payload, "auth");
      return {
        ...state,
        loading: false,
        error: false,
        res: payload,
        data: payload
      };
    case feedbackActionTypes.POST_FEEDBACK_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        res: [],
        data: ""
      };
    
    default:
      return state;
  }
};


export const feedbackUpdateReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case feedbackActionTypes.UPDATE_FEEDBACK_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        res: [],
        data: ""
      };
    case feedbackActionTypes.UPDATE_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        res: payload,
        data: payload
      };
    case feedbackActionTypes.UPDATE_FEEDBACK_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        res: [],
        data: ""
      };
    
    default:
      return state;
  }
};
export const feedbackDeleteReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case feedbackActionTypes.DELETE_FEEDBACK_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        res: [],
        data: ""
      };
    case feedbackActionTypes.DELETE_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        res: payload,
        data: payload
      };
    case feedbackActionTypes.DELETE_FEEDBACK_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        res: [],
        data: ""
      };
    
    default:
      return state;
  }
};


