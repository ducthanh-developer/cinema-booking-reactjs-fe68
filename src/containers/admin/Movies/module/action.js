import movieApi from 'apis/movieApi';
import {
    FETCH_MOVIE_LIST_SUCCESS,
    FETCH_MOVIE_LIST_FAILED,
    FETCH_MOVIE_INFO_SUCCESS,
} from './types';

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
const actFetchMovieInfoSucess = (movieInfo) => {
    return {
        type: FETCH_MOVIE_INFO_SUCCESS,
        payload: movieInfo,
    };
};

// async action
export const actFetchAllMovie = () => {
    return (dispatch) => {
        //call api
        movieApi
            .fecthAllMovieApi()
            .then((res) => {
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
                //console.log(res.data.content);
                alert('Them phim thanh cong!!');
            })
            .catch((err) => {
                //console.log(err);
            });
    };
};
export const actFetchMovieInfo = (maPhim) => {
    return (dispatch) => {
        movieApi
            .fetchMovieInfoApi(maPhim)
            .then((res) => {
                //console.log(res.data.content);
                dispatch(actFetchMovieInfoSucess(res.data.content));
            })
            .catch((err) => {
                //console.log(err);
            });
    };
};
export const actEditMovieInfo = (formData) => {
    return (dispatch) => {
        movieApi
            .editMovieInfoApi(formData)
            .then((res) => {
                //console.log('call api');
                //console.log(res);
                alert('Cập nhật phim thành công!!');
            })
            .catch((err) => {
                //console.log(err);
            });
    };
};
