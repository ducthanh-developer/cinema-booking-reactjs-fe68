import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actBookTicket, actFetchTicketOfficeList } from '../module/actions';
import './Checkout.scss';
import moment from 'moment';
import { CloseOutlined } from '@ant-design/icons';
import { BOOK_TICKET } from '../module/types';
import _ from 'lodash';
import { ThongTinDatVe } from '_core/models/ThongTinDatVe';
import { Tabs, Button } from 'antd';
import { actFetchUserInfo } from 'containers/client/User/module/actions';
import { Link } from 'react-router-dom';
function Checkout(props) {
    const { userLogin } = useSelector((state) => state.clientUserReducer);

    const { ticketOfficeDetail, seatListAvailable } = useSelector(
        (state) => state.clientTicketOfficeReducer
    );

    const dispatch = useDispatch();

    useEffect(() => {
        const action = actFetchTicketOfficeList(props.match.params.id);
        dispatch(action);
    }, []);

    const { thongTinPhim, danhSachGhe } = ticketOfficeDetail;

    const renderSeats = () => {
        return danhSachGhe.map((seat, index) => {
            let seatImg;

            let seatBooking = seatListAvailable.findIndex(
                (seatBook) => seatBook.maGhe === seat.maGhe
            );
            if (seatBooking !== -1) {
                seatImg = 3;
            } else {
                seatImg = seat.loaiGhe === 'Vip' ? 4 : 5;
                seatImg = seat.daDat === true ? 1 : seatImg;
                seatImg = seat.taiKhoanNguoiDat == userLogin.taiKhoan ? 6 : seatImg;
            }
            return (
                <Fragment key={seat.maGhe}>
                    <div
                        className="seat"
                        style={seat.daDat ? { cursor: 'no-drop' } : { cursor: 'pointer' }}
                        onClick={() => {
                            if (!seat.daDat) {
                                dispatch({
                                    type: BOOK_TICKET,
                                    payload: seat,
                                });
                            }
                        }}
                    >
                        <img
                            src={`../img/seat/seat${seatImg}.png`}
                            alt="true"
                            className="seatImg"
                        />
                        <span className="seatNumber">
                            {seat.daDat ? <CloseOutlined /> : seat.stt}
                        </span>
                    </div>
                    {(index + 1) % 16 === 0 ? <br /> : ''}
                </Fragment>
            );
        });
    };

    return (
        <>
            <div
                className="leftCheckout"
                style={{ backgroundImage: `url(${thongTinPhim.hinhAnh})` }}
            >
                <div className="modalLeft"></div>
            </div>
            <div className="seatCheckout">
                <div className="seatv2 row">
                    <div className="topContent row">
                        <div className="leftTitle">
                            <div className="logoCinema">
                                <img
                                    src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
                                    alt="true"
                                    className="logo"
                                />
                            </div>
                            <div className="contentCinema">
                                <p className="address">
                                    <span>{thongTinPhim.tenCumRap}</span>
                                </p>
                                <p className="hour">
                                    {moment(thongTinPhim.ngayChieu).format('dddd DD/MM/YYYY')} -{' '}
                                    {thongTinPhim.gioChieu} - {thongTinPhim.tenRap}
                                </p>
                            </div>
                        </div>
                        <div className="rightTitle">
                            <p className="info1">thời gian giữ ghế</p>
                            <p className="info2">
                                <span>5:00</span>
                            </p>
                        </div>
                    </div>
                    <div className="seatMap">
                        <div className="parent-panzoom">
                            <div className="panzoom">
                                <div className="screenMain">
                                    <div className="nameScreen">
                                        <img
                                            className="logo"
                                            src="https://tix.vn/app/assets/img/icons/screen.png"
                                        />
                                    </div>
                                </div>
                                <div className="listSeat">{renderSeats()}</div>
                            </div>
                        </div>
                        <div className="noteSeat mb-5">
                            <div className="typeSeats">
                                <span className="typeSeat">
                                    <img src="../img/seat/seat3.png" alt="true" />
                                    <span className="nameSeat">Ghế đang chọn</span>
                                </span>
                                <span className="typeSeat">
                                    <div className="seat">
                                        <img src="../img/seat/seat1.png" alt="true" />
                                        <span className="seatNumber">
                                            <CloseOutlined />
                                        </span>
                                    </div>

                                    <span className="nameSeat">Ghế đã có người đặt</span>
                                </span>
                                <span className="typeSeat">
                                    <img src="../img/seat/seat5.png" alt="true" />
                                    <span className="nameSeat">Ghế loại thường</span>
                                </span>
                                <span className="typeSeat">
                                    <img src="../img/seat/seat4.png" alt="true" />
                                    <span className="nameSeat">Ghế loại Vip</span>
                                </span>
                                <span className="typeSeat">
                                    <div className="seat">
                                        <img src="../img/seat/seat6.png" alt="true" />
                                        <span className="seatNumber">
                                            <CloseOutlined />
                                        </span>
                                    </div>
                                    <span className="nameSeat">Ghế bạn đã đặt</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightCheckout">
                <div className="contentFullRight">
                    <div className="row total">
                        <p className="cash">0 đ</p>
                    </div>
                    <div className="row filmName">
                        <div>
                            <span className="ageType">C18</span>
                            {thongTinPhim.tenPhim}
                        </div>
                        <div className="contentCinema">
                            <div className="address">{thongTinPhim.tenCumRap}</div>
                            <div className="hour">
                                {moment(thongTinPhim.ngayChieu).format('dddd DD/MM/YYYY')} -{' '}
                                {thongTinPhim.gioChieu} - {thongTinPhim.tenRap}
                            </div>
                        </div>
                    </div>
                    <div className="row chair">
                        <div className="info col-sm-7 col-xs-7">
                            <span>Ghế: </span>
                            {_.sortBy(seatListAvailable, ['stt']).map((seat, index) => {
                                return (
                                    <span className="totalChair" key={seat.maGhe}>
                                        {seat.stt}{' '}
                                    </span>
                                );
                            })}
                        </div>
                        <div className="totalChair col-sm-5 col-xs-5">
                            {seatListAvailable
                                .reduce((total, seat, index) => {
                                    return (total += seat.giaVe);
                                }, 0)
                                .toLocaleString()}{' '}
                            đ
                        </div>
                    </div>
                    <div className="infouser">
                        <div className="row">
                            <div className="label col-sm-12">E-Mail</div>
                            <div className="content col-sm-12">{userLogin?.email}</div>
                        </div>
                    </div>
                    <div className="infouser">
                        <div className="row">
                            <div className="label col-sm-12">Phone</div>
                            <div className="content col-sm-12">{userLogin?.soDT}</div>
                        </div>
                    </div>
                </div>
                <div
                    className="buyTicKet"
                    onClick={() => {
                        const bookTicketInfo = new ThongTinDatVe();
                        bookTicketInfo.maLichChieu = props.match.params.id;
                        bookTicketInfo.danhSachVe = seatListAvailable;
                        dispatch(actBookTicket(bookTicketInfo));
                    }}
                >
                    Đặt Vé
                </div>
            </div>
        </>
    );
}

const { TabPane } = Tabs;

export default function CheckOutTab(props) {
    const operations = <Link to="/" className="navbar-brand mr-5">
    <img src="../img/web-logo.png" alt="true" width={50} height={50}/>
</Link>;
    // const { tabActive } = useSelector((state) => state.clientTicketOfficeReducer);
    return (
        <>
            <Tabs tabBarExtraContent={operations} defaultActiveKey="1" /** activeKey={tabActive} */>
                <TabPane
                    tab={
                        <div className="leftStep">
                            <ul>
                                <li>
                                    <span className="stepNumber">01 </span>
                                    Chọn ghế và thanh toán
                                </li>
                            </ul>
                        </div>
                    }
                    key="1"
                >
                    <Checkout {...props} />
                </TabPane>
                <TabPane
                    tab={
                        <div className="leftStep">
                            <ul>
                                <li>
                                    <span className="stepNumber">02 </span>
                                    Kết quả đặt vé
                                </li>
                            </ul>
                        </div>
                    }
                    key="2"
                >
                    <BookTicketHistory {...props} />
                </TabPane>
            </Tabs>
        </>
    );
}

function BookTicketHistory(props) {
    const { userInfo, userLogin } = useSelector((state) => state.clientUserReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actFetchUserInfo());
    }, []);
    const renderTicketItem = () => {
        return userInfo.thongTinDatVe?.map((ticket, index) => {
            const seats = _.first(ticket.danhSachGhe);
            return (
                <li className="list-group-item" key={index}>
                    {/* Custom content*/}
                    <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                            <h5 className="mt-0 font-weight-bold mb-2">{ticket.tenPhim}</h5>
                            <p className="font-italic text-muted mb-0">
                                Địa điểm: <span className="spanText">{seats.tenHeThongRap} - {seats.tenCumRap}</span>
                            </p>
                            <p className="font-italic text-muted mb-0">
                                Ghế:{' '}
                                {ticket.danhSachGhe?.map((seat, index) => {
                                    return <span className="spanText" key={index}>{seat.tenGhe} </span>;
                                })}
                            </p>
                            <div className="d-flex align-items-center justify-content-between mt-1">
                                <h6 className="font-weight-bold my-2">
                                    {moment(ticket.ngayDat).format('hh:mm A')} - {moment(ticket.ngayDat).format('DD/MM/YYYY')}
                                </h6>
                            </div>
                        </div>
                        <img
                            src={ticket.hinhAnh}
                            alt="Generic placeholder image"
                            width={70}
                            height={100}
                            className="ml-lg-5 order-1 order-lg-2"
                        />
                    </div>
                    {/* End */}
                </li>
            );
        });
    };
    return (
        <div className="container py-5">
            {/* For demo purpose */}
            <div className="row text-center text-white mb-5">
                <div className="col-lg-7 mx-auto">
                    <h1 className="display-6">Lịch sử đặt vé của bạn</h1>
                    <p className="lead mb-0" style={{ color: '#9b9b9b' }}>
                        Danh sách và thông tin chi tiết vé đã đặt, chúc bạn xem phim vui vẻ!
                    </p>
                </div>
            </div>
            {/* End */}
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    {/* List group*/}
                    <ul className="list-group shadow">
                        {/* list group item*/}
                        {renderTicketItem()}
                        {/* End */}
                    </ul>
                    {/* End */}
                </div>
            </div>
        </div>
    );
}
