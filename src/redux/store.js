import { legacy_createStore as createStore , applyMiddleware} from "redux"
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./root-reducer";
// import reducer from "./reducers/index"
//import { cityReducer as reducer } from "./reducers/cityReducer";

//export const store = createStore(reducer, []);

// export default store;

const middlewares = [reduxThunk];

if(process.env.NODE_ENV === "production"){
    middlewares.push(logger);
}

const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;