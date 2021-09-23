import { ThongTinPhongVe } from '_core/models/ThongTinPhongVe';
import { BOOK_TICKET, BOOK_TICKET_SUCCESS, FETCH_TICKET_OFFICE_LIST, SWITCH_TAB } from './types';

const initialState = {
    ticketOfficeDetail: new ThongTinPhongVe(),
    seatListAvailable: [],
    tabActive: "1",
};

export const clientTicketOfficeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_TICKET_OFFICE_LIST: {
            state.ticketOfficeDetail = payload;
            return { ...state };
        }

        case BOOK_TICKET: {
            let seatListAvailableUpdate = [...state.seatListAvailable];
            let index = seatListAvailableUpdate.findIndex((seat) => seat.maGhe == payload.maGhe);
            if (index !== -1) {
                seatListAvailableUpdate.splice(index, 1);
            } else {
                seatListAvailableUpdate.push(payload);
            }
            return { ...state, seatListAvailable: seatListAvailableUpdate };
        }

        case BOOK_TICKET_SUCCESS: {
            state.seatListAvailable = [];
            return { ...state };
        }

        case SWITCH_TAB: {
            state.tabActive = "2";
            return { ...state };
        }

        

        default:
            return state;
    }
};
