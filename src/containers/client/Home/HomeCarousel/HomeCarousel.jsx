import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';
import ModalVideo from 'react-modal-video';

export default class HomeCarousel extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            videoId: '',
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal(videoId) {
        this.setState({ isOpen: true, videoId});
    }
    render() {
        function SampleNextArrow(props) {
            const { className, style, onClick } = props;
            return (
                <img
                    className={className}
                    style={{ ...style, display: 'block' }}
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
                    style={{ ...style, display: 'block' }}
                    onClick={onClick}
                    src="../img/back-session.png"
                />
            );
        }
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };
        return (
            <Fragment>
                <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId={this.state.videoId}
                    onClose={() => this.setState({ isOpen: false })}
                />
                <section className="carousel">
                    <div className="carousel__content">
                        <Slider {...settings}>
                            <div className="carousel__item">
                                <a href="true">
                                    <img src="./img/trang-ti-16194117174325.jpg" />
                                </a>

                                <button onClick={() => this.openModal('l2XBzUZidig')}>
                                    <img src="./img/play-video.png" />
                                </button>
                            </div>
                            <div className="carousel__item">
                                <a href="true">
                                    <img src="./img/lat-mat-48h-16177782153424.png" />
                                </a>
                                <button
                                   onClick={() => this.openModal('8dTr6ieK-UA')}
                                >
                                    <img src="./img/play-video.png" />
                                </button>
                            </div>
                            <div className="carousel__item">
                                <a href="true">
                                    <img src="./img/ban-tay-diet-quy-evil-expeller-16177781815781.png" />
                                </a>
                                <button
                                    onClick={() => this.openModal('uqJ9u7GSaYM')}
                                >
                                    <img src="./img/play-video.png" />
                                </button>
                            </div>
                        </Slider>
                    </div>
                </section>
            </Fragment>
        );
    }
}
