import React, { Component } from "react";
import Slider from "react-slick";

export default class HomeCarousel extends Component {
  render() {
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <img
          className={className}
          style={{ ...style, display: "block"}}
          onClick={onClick}
          src='../img/next-session.png'
        />
      );
    }

    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <img
          className={className}
          style={{ ...style, display: "block"}}
          onClick={onClick}
          src='../img/back-session.png'
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
      prevArrow: <SamplePrevArrow />
    };
    return (
      <section className="carousel">
        <div className="carousel__content">
          <Slider {...settings}>
            <div className="carousel__item">
              <a href>
                <img src="./img/trang-ti-16194117174325.jpg" alt />
              </a>
              <button
                infinite="false"
                data-fancybox
                data-type="iframe"
                data-src="https://www.youtube.com/embed/l2XBzUZidig"
              >
                <img src="./img/play-video.png" alt />
              </button>
            </div>
            <div className="carousel__item">
              <a href>
                <img src="./img/lat-mat-48h-16177782153424.png" alt />
              </a>
              <button
                data-fancybox
                data-type="iframe"
                data-src="https://www.youtube.com/embed/kBY2k3G6LsM"
              >
                <img src="./img/play-video.png" alt />
              </button>
            </div>
            <div className="carousel__item">
              <a href>
                <img
                  src="./img/ban-tay-diet-quy-evil-expeller-16177781815781.png"
                  alt
                />
              </a>
              <button
                data-fancybox
                data-type="iframe"
                data-src="https://www.youtube.com/embed/uqJ9u7GSaYM"
              >
                <img src="./img/play-video.png" alt />
              </button>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
