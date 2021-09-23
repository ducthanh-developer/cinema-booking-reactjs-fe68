import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { actFetchMovieDetail, actFetchMovieShowTime } from './module/actions';
import moment from 'moment';
import { Rate, Tabs, Button } from 'antd';
import './MovieDetail.scss';
import { Link } from 'react-router-dom';

class MovieDetail extends PureComponent {
    componentDidMount() {
        const { movieId } = this.props.match.params;
        const { fetchMovieDetail, fetchMovieShowtime } = this.props;
        fetchMovieDetail(movieId);
        fetchMovieShowtime(movieId);
    }

    renderShowtime = () => {
        const { movieShowtime } = this.props;
        const { TabPane } = Tabs;
        return movieShowtime.heThongRapChieu?.map((theaterSystem, index) => {
            return (
                <Fragment key={index}>
                    <TabPane
                        tab={
                            <img
                                src={theaterSystem.logo}
                                alt={theaterSystem.tenHeThongRap}
                                className="img-theater"
                            />
                        }
                        key={index}
                    >
                        {theaterSystem.cumRapChieu.map((theater, index) => {
                            return (
                                <Fragment key={index}>
                                    <div className="d-flex complex-theater mb-2">
                                        <div className="complex__image mr-2">
                                            <img
                                                src={theater.hinhAnh}
                                                alt={theater.tenCumRap}
                                                className="img-theater"
                                            />
                                        </div>
                                        <div className="complex__info mr-auto">
                                            <p>{theater.tenCumRap}</p>
                                            <span>{theater.diaChi}</span>
                                        </div>
                                    </div>
                                    <div className="complex-showtime mb-4">
                                        {theater.lichChieuPhim
                                            .slice(0, 12)
                                            .map((showtime, index) => {
                                                return (
                                                    <Link key={index} to={`/checkout/${showtime.maLichChieu}`}>
                                                        <Button className="m-2">
                                                            {moment(
                                                                showtime.ngayChieuGioChieu
                                                            ).format('hh:mm A')}
                                                        </Button>
                                                    </Link>
                                                );
                                            })}
                                    </div>
                                </Fragment>
                            );
                        })}
                    </TabPane>
                </Fragment>
            );
        });
    };

    render() {
        const { movieDetail } = this.props;
        return (
            <section className="product">
                <div className="product__content">
                    <div className="product__overlay">
                        <img
                            src={movieDetail.hinhAnh}
                            className="product__overlay--image"
                            alt="true"
                        />
                        <div className="product__overlay--blur" />
                        <button
                            className="product__overlay--btn"
                            data-fancybox
                            data-type="iframe"
                            data-src="https://www.youtube.com/embed/ykBfss-8H4Y"
                        >
                            <img src="../img/play-video.png" alt="true" />
                        </button>
                    </div>
                    <div className="product__main container">
                        <div className="product__mainInfo row">
                            <div className="col-12 col-sm-4 product__left">
                                <img src={movieDetail.hinhAnh} alt={movieDetail.tenPhim} />
                                <div className="product__mainInfo--overlay">
                                    <a href="true">
                                        <button
                                            data-fancybox
                                            data-type="iframe"
                                            data-src="https://www.youtube.com/embed/ykBfss-8H4Y"
                                        >
                                            <img src="../img/play-video.png" alt="true" />
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 product__center">
                                <p>{moment(movieDetail.ngayKhoiChieu).format('DD.MM.YYYY')}</p>
                                <div className="product__title">
                                    <span className="active">c18</span>
                                    <span>{movieDetail.tenPhim}</span>
                                </div>
                                <p>100 phút - 0 IMDb - 2D/Digital</p>
                            </div>
                            <div className="col-12 col-sm-2 product__right">
                                <div className="product__process">
                                    <h4>{movieDetail.danhGia}</h4>
                                    <div className="product__process--bar"></div>
                                </div>
                                <div className="product__star">
                                    <Rate
                                        className="star"
                                        allowHalf
                                        value={movieDetail.danhGia / 2}
                                    ></Rate>
                                    <h5>320 người đánh giá</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__review container">
                    <ul
                        className="nav nav-tabs align-items-center justify-content-center"
                        id="myTab"
                        role="tablist"
                    >
                        <li className="nav-item" role="presentation">
                            <a
                                className="nav-link"
                                id="showtimes-tab"
                                data-toggle="tab"
                                href="#showtimes"
                                role="tab"
                                aria-controls="showtimes"
                                aria-selected="false"
                            >
                                Lịch chiếu
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a
                                className="nav-link active"
                                id="info-tab"
                                data-toggle="tab"
                                href="#info"
                                role="tab"
                                aria-controls="info"
                                aria-selected="true"
                            >
                                Thông Tin
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a
                                className="nav-link"
                                id="comment-tab"
                                data-toggle="tab"
                                href="#comment"
                                role="tab"
                                aria-controls="comment"
                                aria-selected="false"
                            >
                                Đánh Giá
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div
                            className="tab-pane fade show"
                            id="showtimes"
                            role="tabpanel"
                            aria-labelledby="showtimes-tab"
                        >
                            <Tabs tabPosition="left">{this.renderShowtime()}</Tabs>
                        </div>
                        <div
                            className="tab-pane fade show active"
                            id="info"
                            role="tabpanel"
                            aria-labelledby="info-tab"
                        >
                            <div className="row">
                                <div className="col-12 col-sm-6 review__tab--left">
                                    <div className="review__tab--text">
                                        <p>Ngày công chiếu</p>
                                        <p>
                                            {moment(movieDetail.ngayKhoiChieu).format('DD.MM.YYYY')}
                                        </p>
                                    </div>
                                    <div className="review__tab--text">
                                        <p>Đạo diễn</p>
                                        <p>Lý Hải</p>
                                    </div>
                                    <div className="review__tab--text">
                                        <p>Diễn viên</p>
                                        <p>Tiết Cương, Huỳnh Đông, Mạc Văn Khoa, Ốc Thanh Vân</p>
                                    </div>
                                    <div className="review__tab--text">
                                        <p>Thể Loại</p>
                                        <p />
                                    </div>
                                    <div className="review__tab--text">
                                        <p>Định dạng</p>
                                        <p>2D/Digital</p>
                                    </div>
                                    <div className="review__tab--text">
                                        <p>Quốc Gia SX</p>
                                        <p>Việt Nam</p>
                                    </div>
                                    <div className="review__tab--text">
                                        <p>Tin liên quan</p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 review__tab--right">
                                    <div className="review__tab--text">
                                        <p>Nội dung</p>
                                        <p>{movieDetail.moTa}</p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 review__tab--post">
                                    <img src="../img/lat-mat-48h-16177782153424.png" alt="true" />
                                    <a href="true">
                                        Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip
                                        Lật Mặt: 48H..
                                    </a>
                                    <div className="review__tab--postIcon">
                                        <span className="like">
                                            <img src="../img/like.png" alt="true" />0
                                        </span>
                                        <span className="comment">
                                            <img src="../img/comment.png" alt="true" />0
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade container"
                            id="comment"
                            role="tabpanel"
                            aria-labelledby="comment-tab"
                        >
                            <div className="row">
                                <div className="col-12 review__tab--comment">
                                    <div className="review__tab--commentLeft">
                                        <img src="../img/avatar.png" alt="true" />
                                        <p>Bạn nghĩ gì về phim này?</p>
                                    </div>
                                    <div className="review__tab--commentRight">
                                        <img src="../img/star1.png" alt="true" />
                                        <img src="../img/star1.png" alt="true" />
                                        <img src="../img/star1.png" alt="true" />
                                        <img src="../img/star1.png" alt="true" />
                                        <img src="../img/star1.png" alt="true" />
                                    </div>
                                </div>
                                <div className="col-12 review__tab--listComment">
                                    <div className="review__tab--itemComment">
                                        <div className="row review__tab--itemTop">
                                            <div className="col-6 review__tab--itemLeft">
                                                <div className="review__tab--itemLeft--icon">
                                                    <img src="../img/avatar.png" alt="true" />
                                                </div>
                                                <div className="review__tab--itemLeft--text">
                                                    <h6>Phương</h6>
                                                    <p>24 ngày trước</p>
                                                </div>
                                            </div>
                                            <div className="col-6 review__tab--itemRight">
                                                <div className="review__tab--itemRight--point">
                                                    <p>10</p>
                                                    <img src="../img/star1.png" alt="true" />
                                                    <img src="../img/star1.png" alt="true" />
                                                    <img src="../img/star1.png" alt="true" />
                                                    <img src="../img/star1.png" alt="true" />
                                                    <img src="../img/star1.png" alt="true" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review__tab--itemCenter">
                                            <p>Phải nói rằng là quá hay</p>
                                        </div>
                                        <hr />
                                        <div className="review__tab--itemBot">
                                            <img src="../img/like.png" alt="true" />
                                            <span>10 Thích</span>
                                        </div>
                                    </div>
                                    <div className="review__tab--itemComment">
                                        <div className="row review__tab--itemTop">
                                            <div className="col-6 review__tab--itemLeft">
                                                <div className="review__tab--itemLeft--icon">
                                                    <img src="../img/avatar.png" alt="true" />
                                                </div>
                                                <div className="review__tab--itemLeft--text">
                                                    <h6>Long</h6>
                                                    <p>8 ngày trước</p>
                                                </div>
                                            </div>
                                            <div className="col-6 review__tab--itemRight">
                                                <div className="review__tab--itemRight--point">
                                                    <p>10</p>
                                                    <img src="../img/star1.png" alt="true" />
                                                    <img src="../img/star1.png" alt="true" />
                                                    <img src="../img/star1.png" alt="true" />
                                                    <img src="../img/star1.png" alt="true" />
                                                    <img src="../img/star1.png" alt="true" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review__tab--itemCenter">
                                            <p>Phải nói rằng là quá hay, đỉnh của chóp</p>
                                        </div>
                                        <hr />
                                        <div className="review__tab--itemBot">
                                            <img src="../img/like.png" alt="true" />
                                            <span>68 Thích</span>
                                        </div>
                                    </div>
                                    <div className="review__tab--itemComment reply">
                                        <div className="review__tab--itemCommentParent">
                                            <div className="review__tab--itemCommentTop">
                                                <div className="row review__tab--itemTop">
                                                    <div className="col-6 review__tab--itemLeft">
                                                        <div className="review__tab--itemLeft--icon">
                                                            <img
                                                                src="../img/avatar.png"
                                                                alt="true"
                                                            />
                                                        </div>
                                                        <div className="review__tab--itemLeft--text">
                                                            <h6>Tường</h6>
                                                            <p>12 ngày trước</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 review__tab--itemRight">
                                                        <div className="review__tab--itemRight--point">
                                                            <p>10</p>
                                                            <img
                                                                src="../img/star1.png"
                                                                alt="true"
                                                            />
                                                            <img
                                                                src="../img/star1.png"
                                                                alt="true"
                                                            />
                                                            <img
                                                                src="../img/star1.png"
                                                                alt="true"
                                                            />
                                                            <img
                                                                src="../img/star1.png"
                                                                alt="true"
                                                            />
                                                            <img
                                                                src="../img/star1.png"
                                                                alt="true"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review__tab--itemCenter">
                                                    <p>
                                                        Phim của anh Lý Hải chưa bao giờ làm mình
                                                        thất vọng
                                                    </p>
                                                </div>
                                                <hr />
                                                <div className="review__tab--itemReply">
                                                    <div className="review__tab--itemBot--like">
                                                        <img
                                                            className="like"
                                                            src="../img/like.png"
                                                            alt="true"
                                                        />
                                                        <span>86 Thích</span>
                                                    </div>
                                                    <div className="review__tab--itemBot--comment">
                                                        <img
                                                            className="comment"
                                                            src="../img/comment.png"
                                                            alt="true"
                                                        />
                                                        <span>16 Bình Luận</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review__tab--itemCommentChild">
                                            <div className="row review__tab--itemTop">
                                                <div className="col-12 review__tab--itemLeft">
                                                    <div className="review__tab--itemLeft--icon">
                                                        <img src="../img/avatar.png" alt="true" />
                                                    </div>
                                                    <div className="review__tab--itemLeft--text">
                                                        <h6>Hân Pro</h6>
                                                        <p>12 ngày trước</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="review__tab--itemCenter">
                                                <p>
                                                    Phim của anh Lý Hải chưa bao giờ làm mình thất
                                                    vọng
                                                </p>
                                            </div>
                                            <div className="review__tab--itemBot">
                                                <span>68 Thích</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="review__btn text-center">
                                <button>Xem Thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movieDetail: state.clientMovieDetailReducer.movieDetail,
        movieShowtime: state.clientMovieDetailReducer.movieShowtime,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieDetail: (movieId) => dispatch(actFetchMovieDetail(movieId)),
        fetchMovieShowtime: (movieId) => dispatch(actFetchMovieShowTime(movieId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
