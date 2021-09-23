import movieApi from 'apis/movieApi';
import { actDisplayLoading, actHideLoading } from 'components/Loading/module/actions';
import { FETCH_ALL_MOVIE, SET_SHOWTIME_THEATER_SYSTEM } from './types';

export const actFetchAllMovieApi = () => {
    return (dispatch) => {
        dispatch(actDisplayLoading);
        movieApi
            .fecthAllMovieApi()
            .then((response) => {
                dispatch({
                    type: FETCH_ALL_MOVIE,
                    payload: response.data.content,
                });
            })
            .then(() => dispatch(actHideLoading))
            .catch((errors) => {
                console.log(errors);
                dispatch(actHideLoading);
            });
    };
};

export const actFetchShowtimeTheaterSystem = () => {
    return (dispatch) => {
        dispatch(actDisplayLoading);
        movieApi
            .fetchShowtimeTheaterSystemApi()
            .then((res) => {
                dispatch({
                    type: SET_SHOWTIME_THEATER_SYSTEM,
                    payload: res.data.content,
                });
            })
            .then(() => dispatch(actHideLoading))
            .catch((err) => {
                console.log(err);
                dispatch(actHideLoading);
            });
    };
};
