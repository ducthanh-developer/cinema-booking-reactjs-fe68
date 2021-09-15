import React, { Component, PureComponent, Fragment } from "react";
import { Tabs, Button } from "antd";
import { connect } from "react-redux";
import { actFetchShowtimeTheaterSystem } from "../module/actions";
import "./HomeShowTime.scss";
import moment from "moment";


const { TabPane } = Tabs;

class HomeShowTime extends PureComponent {
  componentDidMount() {
    this.props.fetchShowtimeTheaterSystem();
  }

  renderShowTime = () => {
    return this.props.listTheaterSystem.map((theaterSystem, index) => {
      return (
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
          <Tabs tabPosition="left">
            {theaterSystem.lstCumRap.map((theater, index) => {
              return (
                <TabPane
                  tab={
                    <div className="d-flex complex-theater">
                      <div className="complex__image mr-2">
                        <img
                          src={theater.hinhAnh}
                          alt={theater.tenCumRap}
                          className="img-theater"
                        />
                      </div>
                      <div className="complex__info mr-auto">
                        <p>{theater.tenCumRap}</p>
                        <span>
                          {theater.diaChi.length < 40
                            ? theater.diaChi
                            : `${theater.diaChi.slice(0, 40)}...`}
                        </span>
                        <h5>[chi tiết]</h5>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {theater.danhSachPhim.slice(0,3).map((film, index) => {
                    return (
                      <Fragment>
                        <div className="d-flex complex-theater mb-2">
                          <div className="complex__image mr-2">
                            <img
                              src={film.hinhAnh}
                              alt={film.tenPhim}
                              className="img-theater"
                            />
                          </div>
                          <div className="complex__info mr-auto">
                            <p>{film.tenPhim}</p>
                          </div>
                        </div>
                        <div className="complex-showtime mb-4">
                          {film.lstLichChieuTheoPhim.slice(0,12).map((showtime, index) => {
                            return <Button className="m-2">{moment(showtime.ngayChieuGioChieu).format("hh:mm A")}</Button>;
                          })}
                        </div>
                      </Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  render() {
    console.log(this.props.listTheaterSystem);
    return (
      <section className="complex">
        <div className="complex__content container">
          <div className="row">
            <Tabs tabPosition="left">{this.renderShowTime()}</Tabs>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { listTheaterSystem: state.movieClientReducer.listTheaterSystem };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShowtimeTheaterSystem: () => dispatch(actFetchShowtimeTheaterSystem()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeShowTime);
