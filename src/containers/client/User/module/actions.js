import movieApi from 'apis/movieApi';
import { history } from 'App';
import { FETCH_USER_INFO, LOGIN_ACTION } from './types';

export const actLogin = (userInfo) => {
    return (dispatch) => {
        movieApi
            .loginApi(userInfo)
            .then((res) => {
                dispatch({ type: LOGIN_ACTION, payload: res.data.content });
                history.goBack();
            })
            .catch((err) => console.log(err));
    };
};

export const actFetchUserInfo = () => {
    return (dispatch) => {
        movieApi
            .fetchUserInfoApi()
            .then((res) => {
                dispatch({ type: FETCH_USER_INFO, payload: res.data.content });
            })
            .catch((err) => console.log(err));
    };
};
