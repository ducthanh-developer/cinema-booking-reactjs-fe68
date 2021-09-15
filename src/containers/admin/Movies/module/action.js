import movieApi from 'apis/movieApi';
import { FETCH_MOVIE_LIST_SUCCESS, FETCH_MOVIE_LIST_FAILED } from './types';

const actFetchAllMovieSucess = (movieList) => {
    return {
        type: FETCH_MOVIE_LIST_SUCCESS,
        payload: movieList,
    };
};
const actFetchAllMovieFailed = (err) => {
    return {
        type: FETCH_MOVIE_LIST_FAILED,
        payload: err,
    };
};

// async action
export const actFetchAllMovie = () => {
    return (dispatch) => {
        //call api
        movieApi
            .fetchAllMovieApi()
            .then((res) => {
                console.log(res.data.content);
                dispatch(actFetchAllMovieSucess(res.data.content));
            })
            .catch((err) => {
                dispatch(actFetchAllMovieFailed(err));
            });
    };
};
