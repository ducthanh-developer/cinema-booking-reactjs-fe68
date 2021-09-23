import movieApi from 'apis/movieApi';
import { FETCH_MOVIE_LIST_SUCCESS, FETCH_MOVIE_LIST_FAILED, ADD_MOVIE_UPLOAD_IMGAGE_SUCCESS } from './types';

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
            .fecthAllMovieApi()
            .then((res) => {
                console.log(res.data.content);
                dispatch(actFetchAllMovieSucess(res.data.content));
            })
            .catch((err) => {
                dispatch(actFetchAllMovieFailed(err));
            });
    };
};

export const actAddMovieUploadImage = (formData) => {
    return (dispatch) => {
        movieApi
            .addMovieUploadImage(formData)
            .then((res) => {
                console.log(res.data.content);
                alert('Them phim thanh cong!!');
            })
            .catch((err) => {
                console.log(err.data.content);
            });
    };
};
