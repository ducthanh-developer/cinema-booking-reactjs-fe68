import { FETCH_MOVIE_DETAIL, FETCH_MOVIE_SHOWTIME } from './types';

const initialState = {
    movieDetail: {},
    movieShowtime: [],
};

const clientMovieDetailReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_MOVIE_DETAIL:
            state.movieDetail = payload;
            return { ...state };
        case FETCH_MOVIE_SHOWTIME:
            state.movieShowtime = payload;
            return { ...state };
        default:
            return state;
    }
};

export default clientMovieDetailReducer;
