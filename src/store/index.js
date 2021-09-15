import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import movieClientReducer from 'containers/client/Home/module/reducer';
import movieDetailClientReducer from 'containers/client/MovieDetail/module/reducer';
import movieAdminReducer from 'containers/admin/Movies/module/reducer';

const rootReducer = combineReducers({
    movieClientReducer,
    movieDetailClientReducer,
    movieAdminReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
