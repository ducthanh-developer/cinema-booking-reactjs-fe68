import movieApi from 'apis/movieApi';
import { actDisplayLoading, actHideLoading } from 'components/Loading/module/actions';
import { ThongTinDatVe } from '_core/models/ThongTinDatVe';
import { BOOK_TICKET, BOOK_TICKET_SUCCESS, FETCH_TICKET_OFFICE_LIST, SWITCH_TAB } from './types';

export const actFetchTicketOfficeList = (showtimeCode) => {
    return (dispatch) => {
        dispatch(actDisplayLoading);
        movieApi
            .fetchTicketOfficeListApi(showtimeCode)
            .then((res) => dispatch({ type: FETCH_TICKET_OFFICE_LIST, payload: res.data.content }))
            .then(() => dispatch(actHideLoading))
            .catch((err) => console.log(err));
    };
};

export const actBookTicket = (bookTicketInfo = new ThongTinDatVe()) => {
    return (dispatch) => {
        dispatch(actDisplayLoading);
        movieApi
            .bookTicketApi(bookTicketInfo)
            .then((res) => {
                dispatch({ type: BOOK_TICKET, payload: res.data.content });
                dispatch({ type: BOOK_TICKET_SUCCESS });
            })
            .then(() => dispatch(actFetchTicketOfficeList(bookTicketInfo.maLichChieu)))
            .then(() => dispatch(actHideLoading))
            .then(() => dispatch({ type: SWITCH_TAB }))
            .catch((err) => {
                console.log(err);
                dispatch(actHideLoading);
            });
    };
};
