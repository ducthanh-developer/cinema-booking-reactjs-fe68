import movieApi from 'apis/movieApi';
import { history } from 'App';
import { LOGIN_ACTION } from './types';

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
