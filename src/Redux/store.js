// NOTE: use this store variable to create a store.
import {legacy_createStore,applyMiddleware,compose,combineReducers} from "redux"
import thunk from "redux-thunk"
import {reducer as AppReducer} from "../Redux/AppReducer/reducer"
import {reducer as AuthReducer} from "../Redux/AuthReducer/reducer"


const rootReducer=combineReducers({AppReducer,AuthReducer})
const composeEnhancers=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE||compose;
export const store = legacy_createStore(rootReducer,
  composeEnhancers(applyMiddleware(thunk)));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
