import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./Root_Reducer";

const MiddleWare =[thunk];

if(process.env.NODE_ENV === 'development') {
  MiddleWare.push(logger)
}

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...MiddleWare))
);

export default store;
