import movieApi from 'apis/movieApi';
import { FETCH_ALL_MOVIE, SET_SHOWTIME_THEATER_SYSTEM } from './types';

export const actFetchAllMovieApi = () => {
    return (dispatch) => {
        movieApi
            .fecthAllMovieApi()
            .then((response) =>
                dispatch({
                    type: FETCH_ALL_MOVIE,
                    payload: response.data.content,
                })
            )
            .catch((errors) => console.log(errors));
    };
};

export const actFetchShowtimeTheaterSystem = () => {
    return (dispatch) => {
        movieApi
            .fetchShowtimeTheaterSystemApi()
            .then((res) =>
                dispatch({
                    type: SET_SHOWTIME_THEATER_SYSTEM,
                    payload: res.data.content,
                })
            )
            .catch((err) => console.log(err));
    };
};
