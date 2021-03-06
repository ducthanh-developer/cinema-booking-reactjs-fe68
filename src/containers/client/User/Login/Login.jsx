import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actLogin } from '../module/actions';
import './Login.scss';

export default function Login(props) {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        onSubmit: (values) => {
            dispatch(actLogin(values));
        },
    });

    return (
        <div className="login-wrapper my-auto">
            <h1 className="login-title">Đăng nhập</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label>Tài khoản</label>
                    <input
                        type="text"
                        name="taiKhoan"
                        onChange={formik.handleChange}
                        className="form-control"
                        placeholder="Nhập vào tài khoản"
                        required
                    />
                </div>
                <div className="form-group mb-4">
                    <label>Mật khẩu</label>
                    <input
                        type="password"
                        name="matKhau"
                        className="form-control"
                        placeholder="Nhập vào mật khẩu"
                        onChange={formik.handleChange}
                        required
                    />
                </div>
                <input
                    name="login"
                    className="btn btn-block login-btn"
                    type="submit"
                    value="Đăng nhập"
                />
            </form>
            <a href="#!" className="forgot-password-link">
                Quên mật khẩu?
            </a>
            <p className="login-wrapper-footer-text">
                Chưa có tài khoản?{' '}
                <Link to="/register" className="text-reset">
                    Đăng ký
                </Link>
            </p>
        </div>
    );
}
