import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="container-fluid">
        <div className="header__content">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link to="/" className="navbar-brand">
              <img src="../img/web-logo.png" alt />
            </Link>
            <button className="navbar-toggler" id="showMenu" type="button">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <div className="header__center">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Lịch chiếu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Cụm rạp
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Tin tức
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Ứng dụng
                    </a>
                  </li>
                </div>
                <div className="header__right">
                  <li className="nav-item bar">
                    <a className="nav-link" href="#">
                      <img src="../img/avatar.png" alt />
                      Đăng nhập
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        className="location"
                        src="../img/location-header.png"
                        alt
                      />
                      Hồ Chí Minh
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a className="dropdown-item" href="#">
                        Hồ Chí Minh
                      </a>
                      <a className="dropdown-item" href="#">
                        Hà Nội
                      </a>
                      <a className="dropdown-item" href="#">
                        Hải Phòng
                      </a>
                      <a className="dropdown-item" href="#">
                        Đà nẵng
                      </a>
                      <a className="dropdown-item" href="#">
                        Biên Hòa
                      </a>
                      <a className="dropdown-item" href="#">
                        Nha Trang
                      </a>
                      <a className="dropdown-item" href="#">
                        Bình Dương
                      </a>
                      <a className="dropdown-item" href="#">
                        Phan Thiết
                      </a>
                      <a className="dropdown-item" href="#">
                        Hạ Long
                      </a>
                      <a className="dropdown-item" href="#">
                        Cần Thơ
                      </a>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </nav>
        </div>
        <div className="header__menu">
          <div className="header__menu--overlay"></div>
          <div className="header__menu--content">
            <div className="header__menu--active">
              <img src="../img/avatar.png" alt />
              <a href>Đăng Nhập</a>
              <i className="fa fa-arrow-right" id="closeMenu" />
            </div>
            <ul>
              <li>
                <a href>Lịch Chiếu</a>
              </li>
              <li>
                <a href>Cụm Rạp</a>
              </li>
              <li>
                <a href>Tin Tức</a>
              </li>
              <li>
                <a href>Ứng Dụng</a>
              </li>
              <li>
                <a
                  href="#"
                  id="chooseOption"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                >
                  Hồ Chí Minh
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="modal fade bd-example-modal-lg"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <ul>
                <li>
                  <a className="active" href="#">
                    Hồ Chí Minh
                  </a>
                </li>
                <li>
                  <a href="#">Hà Nội</a>
                </li>
                <li>
                  <a href="#">Hải Phòng</a>
                </li>
                <li>
                  <a href="#">Đà nẵng</a>
                </li>
                <li>
                  <a href="#">Biên Hòa</a>
                </li>
                <li>
                  <a href="#">Nha Trang</a>
                </li>
                <li>
                  <a href="#">Bình Dương</a>
                </li>
                <li>
                  <a href="#">Phan Thiết</a>
                </li>
                <li>
                  <a href="#">Hạ Long</a>
                </li>
                <li>
                  <a href="#">Cần Thơ</a>
                </li>
                <li>
                  <a href="#">Vũng Tàu</a>
                </li>
                <li>
                  <a href="#">Huế</a>
                </li>
                <li>
                  <a href="#">Quy Nhơn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
