import axios from 'axios';
import { BASE_URL, TOKEN } from 'settings/apiConfig';

const callApi = (endpoint, method = 'GET', data = null) => {
    return axios({
        url: `${BASE_URL}/${endpoint}`,
        method,
        data,
        headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)}
    });
};

export default callApi;
