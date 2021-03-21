import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["data"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [reduxThunk];

const configureStore = () => {
  let store = createStore(persistedReducer, applyMiddleware(...middlewares));
  let persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore();
