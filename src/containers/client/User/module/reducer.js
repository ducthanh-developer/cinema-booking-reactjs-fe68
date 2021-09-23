import { TOKEN, USER_LOGIN } from 'settings/apiConfig';
import { FETCH_USER_INFO, LOGIN_ACTION } from './types';

let user = {};

if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
    userLogin: user,
    userInfo: { thongTinDatVe: [{ tenPhim: 'lật mặt 48h' }, 2] },
};

export const clientUserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_ACTION: {
            localStorage.setItem(USER_LOGIN, JSON.stringify(payload));
            localStorage.setItem(TOKEN, payload.accessToken);
            return { ...state, userLogin: payload };
        }

        case FETCH_USER_INFO: {
            state.userInfo = payload;
            return { ...state };
        }

        default:
            return state;
    }
};
