import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import movieReducer from 'containers/admin/Movies/module/reducer';
import clientMovieReducer from 'containers/client/Home/module/reducer';
import clientMovieDetailReducer from 'containers/client/MovieDetail/module/reducer';
const rootReducer = combineReducers({
    movieReducer,
    clientMovieReducer,
    clientMovieDetailReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
