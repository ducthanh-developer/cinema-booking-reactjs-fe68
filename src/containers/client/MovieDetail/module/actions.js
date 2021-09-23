import movieApi from 'apis/movieApi';
import { FETCH_MOVIE_DETAIL, FETCH_MOVIE_SHOWTIME } from './types';

export const actFetchMovieDetail = (movieId) => {
    return (dispatch) => {
        movieApi
            .fetchMovieDetailApi(movieId)
            .then((res) =>
                dispatch({
                    type: FETCH_MOVIE_DETAIL,
                    payload: res.data.content,
                })
            )
            //.catch((err) => console.log(err));
    };
};

export const actFetchMovieShowTime = (movieId) => {
    return (dispatch) => {
        movieApi
            .fetchMovieShowtimeApi(movieId)
            .then((res) =>
                dispatch({
                    type: FETCH_MOVIE_SHOWTIME,
                    payload: res.data.content,
                })
            )
            //.catch((err) => console.log(err));
    };
};
