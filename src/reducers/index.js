import { combineReducers } from "redux";

export default function createReducer() {
  const rootReducer = combineReducers({
    user: {},
  });

  return rootReducer;
}
