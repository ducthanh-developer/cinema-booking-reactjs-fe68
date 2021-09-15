import { FETCH_MOVIE_LIST_SUCCESS, FETCH_MOVIE_LIST_FAILED } from './types';

const initialState = {
    movieList: [],
    error:'',
};

function movieReducer(state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_MOVIE_LIST_SUCCESS: {
            return { ...state, movieList: payload };
        }
        case FETCH_MOVIE_LIST_FAILED: {
            return { ...state, error: payload };
        }
        default:
            return state;
    }
}

export default movieReducer;
