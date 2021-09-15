import React, { Component, PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actFetchAllMovieApi } from '../module/actions';
import Slider from 'react-slick';
import moment from 'moment';
import { Rate } from 'antd';
import './MovieList.scss';
class MovieList extends PureComponent {
    componentDidMount() {
        this.props.fetchAllMovie();
    }

    renderListMovieShowing = () =>
        this.props.listMovie.map((movie) => {
            if (movie.dangChieu)
                return (
                    <div className="products__item" key={movie.maPhim}>
                        <div className="products__thumbnail">
                            <div className="products__image">
                                <img src={movie.hinhAnh} alt={movie.biDanh} />
                            </div>
                            <span className="products__review">
                                <p>{movie.danhGia}</p>
                                <Rate
                                    className="star"
                                    allowHalf
                                    value={movie.danhGia / 2}
                                    style={{ fontSize: '8px', color: 'red' }}
                                ></Rate>
                            </span>
                            <Link to="/">
                                <div className="products__overlay">
                                    <button
                                        className="products__overlay--btn"
                                        data-fancybox
                                        data-type="iframe"
                                        data-src={movie.trailer}
                                    >
                                        <img src="./img/play-video.png" alt />
                                    </button>
                                </div>
                            </Link>
                        </div>
                        <div className="products__title">
                            <span className="icon">P</span>
                            <span className="text">{movie.tenPhim}</span>
                        </div>
                        <div className="products__time">
                            <span>100 phút</span>
                        </div>
                    </div>
                );
        });

    renderListMovieComing = () =>
        this.props.listMovie.map((movie) => {
            if (!movie.dangChieu)
                return (
                    <div className="products__item" key={movie.maPhim}>
                        <div className="products__thumbnail">
                            <div className="products__image">
                                <img src={movie.hinhAnh} alt={movie.biDanh} />
                            </div>
                            <span class="products__review">
                                <p>{moment(movie.ngayKhoiChieu).format('DD/MM')}</p>
                            </span>
                            <Link to="/">
                                <div className="products__overlay">
                                    <button
                                        className="products__overlay--btn"
                                        data-fancybox
                                        data-type="iframe"
                                        data-src={movie.trailer}
                                    >
                                        <img src="./img/play-video.png" alt />
                                    </button>
                                </div>
                            </Link>
                        </div>
                        <div className="products__title">
                            <span className="icon">P</span>
                            <span className="text">
                                {movie.tenPhim.length < 48
                                    ? movie.tenPhim
                                    : `${movie.tenPhim.slice(0, 48)}...`}
                            </span>
                        </div>
                        <div className="products__time">
                            <span>100 phút</span>
                        </div>
                    </div>
                );
        });

    render() {
        function SampleNextArrow(props) {
            const { className, style, onClick } = props;
            return (
                <img
                    className={className}
                    style={{
                        ...style,
                        display: 'block',
                        width: '50px',
                        height: '50px',
                        right: '-50px',
                    }}
                    onClick={onClick}
                    src="../img/next-session.png"
                />
            );
        }

        function SamplePrevArrow(props) {
            const { className, style, onClick } = props;
            return (
                <img
                    className={className}
                    style={{
                        ...style,
                        display: 'block',
                        display: 'block',
                        width: '50px',
                        height: '50px',
                        left: '-50px',
                    }}
                    onClick={onClick}
                    src="../img/back-session.png"
                />
            );
        }
        const settings = {
            className: 'center',
            centerMode: true,
            infinite: true,
            centerPadding: '0px',
            slidesToShow: 1,
            speed: 500,
            rows: 2,
            slidesPerRow: 4,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };
        return (
            <div className="products__bot">
                <ul
                    className="nav nav-tabs justify-content-center align-items-center"
                    id="myTab"
                    role="tablist"
                >
                    <li className="nav-item" role="presentation">
                        <a
                            className="nav-link active"
                            id="home-tab"
                            data-toggle="tab"
                            href="#home"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                        >
                            Đang Chiếu
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className="nav-link"
                            id="profile-tab"
                            data-toggle="tab"
                            href="#profile"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                        >
                            Sắp Chiếu
                        </a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                    >
                        <div className="desktop presentFilms">
                            <Slider {...settings}>{this.renderListMovieShowing()}</Slider>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                    >
                        <div className=" desktop futureFilms">
                            <Slider {...settings}>{this.renderListMovieComing()}</Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    listMovie: state.movieClientReducer.listMovie,
    isLoading: state.movieClientReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
    fetchAllMovie: () => dispatch(actFetchAllMovieApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
