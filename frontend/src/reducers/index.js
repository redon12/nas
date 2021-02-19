import { CombineReduccers } from "react-redux";
import { combineReducers } from "redux";
import {
  contyRegReducer,
  displayContestReducer,
  loggedInReducer,
  loggedOutReducer,
  priceReducer,
  regContestReducer,
  registerLabReducer,
  registerReducer,
  submitPostReducer,
} from "./signReducer";

const allReducer = combineReducers({
  loggedIn: loggedInReducer,
  loggeddOut: loggedOutReducer,
  register: registerReducer,
  submitPost: submitPostReducer,
  regContest: regContestReducer,
  displayContest: displayContestReducer,
  contyReg:contyRegReducer,
  pricey : priceReducer
});

export default allReducer;
