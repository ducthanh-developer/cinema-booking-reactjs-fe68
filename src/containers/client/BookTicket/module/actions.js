import movieApi from 'apis/movieApi';
import { ThongTinDatVe } from '_core/models/ThongTinDatVe';
import { FETCH_TICKET_OFFICE_LIST } from './types';

export const actFetchTicketOfficeList = (showtimeCode) => {
    return (dispatch) => {
        movieApi
            .fetchTicketOfficeListApi(showtimeCode)
            .then((res) => dispatch({ type: FETCH_TICKET_OFFICE_LIST, payload: res.data.content }))
            .catch((err) => console.log(err));
    };
};

export const actBookTicket = (bookTicketInfo = new ThongTinDatVe()) => {
    return (dispatch) => {
        movieApi
            .bookTicketApi(bookTicketInfo)
            .then((res) => console.log(res.data.content))
            .catch((err) => console.log(err));
    };
};
