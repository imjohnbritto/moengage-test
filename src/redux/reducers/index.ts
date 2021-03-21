import { combineReducers } from "redux";
import APP_CONFIG_REDUCER from "./APP_CONFIG";
import filtersReducer from "./filters_reducer";

const rootReducer = combineReducers({
  APP_CONFIG: APP_CONFIG_REDUCER,
  filters: filtersReducer
});

export default rootReducer;