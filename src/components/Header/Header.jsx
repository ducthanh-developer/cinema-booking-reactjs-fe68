import { history } from 'App';
import { actFetchUserInfo } from 'containers/client/User/module/actions';
import _ from 'lodash';
import React, { Component, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TOKEN, USER_LOGIN } from 'settings/apiConfig';
import './Header.scss';

export default function Header() {
    const { userLogin, userInfo } = useSelector((state) => state.clientUserReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!_.isEmpty(userLogin)) {
            dispatch(actFetchUserInfo());
        }
    }, []);
    const renderLogin = () => {
        if (_.isEmpty(userLogin)) {
            return (
                <li className="nav-item bar">
                    <Link to="/login" className="nav-link">
                        <img src="../img/avatar.png" alt="true" />
                        Đăng nhập
                    </Link>
                </li>
            );
        }
        return (
            <li className="nav-item bar">
                <Link to="/profile" className="nav-link">
                    <img src="../img/avatar.png" alt="true" />
                    {userInfo.hoTen}
                </Link>
                <div className="userSetting" onClick={()=>{
                    localStorage.removeItem(USER_LOGIN);
                    localStorage.removeItem(TOKEN);
                    history.push('/');
                    window.location.reload();
                }}>
                    <p className="userLogout">Đăng xuất</p>
                </div>
            </li>
        );
    };
    return (
        <header className="container-fluid">
            <div className="header__content">
                <nav className="navbar navbar-expand-md navbar-light">
                    <Link to="/" className="navbar-brand">
                        <img src="../img/web-logo.png" alt="true" />
                    </Link>
                    <button className="navbar-toggler" id="showMenu" type="button">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <div className="header__center">
                                <li className="nav-item">
                                    <a className="nav-link" href="true">
                                        Lịch chiếu
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="true">
                                        Cụm rạp
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="true">
                                        Tin tức
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="true">
                                        Ứng dụng
                                    </a>
                                </li>
                            </div>
                            <div className="header__right">
                                {renderLogin()}
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="true"
                                        id="navbarDropdownMenuLink"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <img
                                            className="location"
                                            src="../img/location-header.png"
                                            alt="true"
                                        />
                                        Hồ Chí Minh
                                    </a>
                                    <div
                                        className="dropdown-menu"
                                        aria-labelledby="navbarDropdownMenuLink"
                                    >
                                        <a className="dropdown-item" href="true">
                                            Hồ Chí Minh
                                        </a>
                                        <a className="dropdown-item" href="true">
                                            Hà Nội
                                        </a>
                                        <a className="dropdown-item" href="true">
                                            Hải Phòng
                                        </a>
                                        <a className="dropdown-item" href="true">
                                            Đà nẵng
                                        </a>
                                        <a className="dropdown-item" href="true">
                                            Biên Hòa
                                        </a>
                                        <a className="dropdown-item" href="true">
                                            Nha Trang
                                        </a>
                                        <a className="dropdown-item" href="true">
                                            Bình Dương
                                        </a>
                                        <a className="dropdown-item" href="true">
                                            Phan Thiết
                                        </a>
                                        <a className="dropdown-item" href="true">
                                            Hạ Long
                                        </a>
                                        <a className="dropdown-item" href="true">
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
                        <img src="../img/avatar.png" alt="true" />
                        <a href="true">Đăng Nhập</a>
                        <i className="fa fa-arrow-right" id="closeMenu" />
                    </div>
                    <ul>
                        <li>
                            <a href="true">Lịch Chiếu</a>
                        </li>
                        <li>
                            <a href="true">Cụm Rạp</a>
                        </li>
                        <li>
                            <a href="true">Tin Tức</a>
                        </li>
                        <li>
                            <a href="true">Ứng Dụng</a>
                        </li>
                        <li>
                            <a
                                href="true"
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
                                <a className="active" href="true">
                                    Hồ Chí Minh
                                </a>
                            </li>
                            <li>
                                <a href="true">Hà Nội</a>
                            </li>
                            <li>
                                <a href="true">Hải Phòng</a>
                            </li>
                            <li>
                                <a href="true">Đà nẵng</a>
                            </li>
                            <li>
                                <a href="true">Biên Hòa</a>
                            </li>
                            <li>
                                <a href="true">Nha Trang</a>
                            </li>
                            <li>
                                <a href="true">Bình Dương</a>
                            </li>
                            <li>
                                <a href="true">Phan Thiết</a>
                            </li>
                            <li>
                                <a href="true">Hạ Long</a>
                            </li>
                            <li>
                                <a href="true">Cần Thơ</a>
                            </li>
                            <li>
                                <a href="true">Vũng Tàu</a>
                            </li>
                            <li>
                                <a href="true">Huế</a>
                            </li>
                            <li>
                                <a href="true">Quy Nhơn</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}
