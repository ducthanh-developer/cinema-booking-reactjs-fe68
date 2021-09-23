import movieApi from 'apis/movieApi';
import { history } from 'App';
import { FETCH_USER_INFO, LOGIN_ACTION } from './types';

export const actLogin = (userInfo) => {
    return (dispatch) => {
        movieApi
            .loginApi(userInfo)
            .then((res) => {
                dispatch({ type: LOGIN_ACTION, payload: res.data.content });
                history.push('/');
                window.location.reload();
            })
            .catch((err) => alert(err.response.data.content));
    };
};

export const actRegister = (userInfo) => {
    return (dispatch) => {
        movieApi
            .registerApi(userInfo)
            .then((res) => {
                history.goBack();
            })
            .catch((err) => alert(err.response.data.content));
    };
};

export const actFetchUserInfo = () => {
    return (dispatch) => {
        movieApi
            .fetchUserInfoApi()
            .then((res) => {
                {
                    dispatch({ type: FETCH_USER_INFO, payload: res.data.content });
                }
            })
            //.catch((err) => console.log(err));
    };
};
