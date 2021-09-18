import {
    FETCH_ALL_MOVIE,
    SET_SHOWTIME_THEATER_SYSTEM,
} from './types';

const initialState = {
    listMovie: [],
    errors: {},
    isLoading: false,
    listTheaterSystem: [],
};

const clientMovieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_ALL_MOVIE: {
            state.listMovie = payload;
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
