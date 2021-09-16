import {
    FETCH_ALL_MOVIE_FAILED,
    FETCH_ALL_MOVIE_SUCCESS,
    SET_SHOWTIME_THEATER_SYSTEM,
    START_LOADING,
    STOP_LOADING,
} from './types';

const initialState = {
    listMovie: [],
    errors: {},
    isLoading: false,
    listTheaterSystem: [],
};

const clientMovieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_ALL_MOVIE_SUCCESS: {
            state.listMovie = payload;
            return { ...state };
        }
        case FETCH_ALL_MOVIE_FAILED: {
            state.errors = payload;
            return { ...state };
        }
        case START_LOADING: {
            state.isLoading = true;
            return { ...state };
        }
        case STOP_LOADING: {
            state.isLoading = false;
            return { ...state };
        }
        case SET_SHOWTIME_THEATER_SYSTEM: {
            state.listTheaterSystem = payload;
            return { ...state };
        }
        default:
            return state;
    }
};

export default clientMovieReducer;
