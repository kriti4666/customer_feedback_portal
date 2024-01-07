import { combineReducers } from "redux";
import { registerReducer, loginReducer } from "./auth/reducer";
import { feedbackListReducer, feedbackCreateReducer,feedbackDeleteReducer, feedbackUpdateReducer } from "./feedback/reducer";

export const rootReducer = combineReducers({
  registerReducer,
  loginReducer,

  feedbackListReducer,
  feedbackCreateReducer,
  feedbackUpdateReducer,
  feedbackDeleteReducer
});
