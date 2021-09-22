import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import movieAdminReducer from 'containers/admin/Movies/module/reducer';
import clientMovieReducer from 'containers/client/Home/module/reducer';
import clientMovieDetailReducer from 'containers/client/MovieDetail/module/reducer';
import { clientUserReducer } from 'containers/client/User/module/reducer';
import { clientTicketOfficeReducer } from 'containers/client/BookTicket/module/reducer';
const rootReducer = combineReducers({
    movieAdminReducer,
    clientMovieReducer,
    clientMovieDetailReducer,
    clientUserReducer,
    clientTicketOfficeReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
