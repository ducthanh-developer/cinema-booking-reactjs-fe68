import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actRegister } from '../module/actions';

export default function Register(props) {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: '',
            hoTen: '',
        },
        onSubmit: (values) => {
            dispatch(actRegister(values));
        },
    });

    return (
        <div className="login-wrapper my-auto">
            <h1 className="login-title">Đăng Ký</h1>
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
                <div className="form-group mb-4">
                    <label>Họ và tên</label>
                    <input
                        type="text"
                        name="hoTen"
                        className="form-control"
                        placeholder="Nhập vào họ và tên"
                        onChange={formik.handleChange}
                        required
                    />
                </div>
                <div className="form-group mb-4">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Nhập vào email"
                        onChange={formik.handleChange}
                        required
                    />
                </div>
                <div className="form-group mb-4">
                    <label>Số điện thoại</label>
                    <input
                        type="text"
                        name="soDt"
                        className="form-control"
                        placeholder="Nhập vào số điện thoại"
                        onChange={formik.handleChange}
                        required
                    />
                </div>

                <input
                    name="login"
                    id="login"
                    className="btn btn-block login-btn"
                    type="submit"
                    value="Đăng ký"
                />
            </form>
        </div>
    );
}
