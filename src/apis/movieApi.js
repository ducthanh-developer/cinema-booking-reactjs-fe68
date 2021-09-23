import { GROUP_ID } from 'settings/apiConfig';
import callApi from 'utils/callApi';
import { ThongTinDatVe } from '../_core/models/ThongTinDatVe';

const movieApi = {
    fecthAllMovieApi() {
        return callApi(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
    },

    fetchMovieDetailApi(movieId) {
        return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
    },

    fetchShowtimeTheaterSystemApi() {
        return callApi(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`);
    },

    fetchMovieShowtimeApi(movieId) {
        return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
    },

    loginApi(userInfo) {
        return callApi('/QuanLyNguoiDung/DangNhap', 'POST', userInfo);
    },

    registerApi(userInfo) {
        return callApi('/QuanLyNguoiDung/DangKy', 'POST', userInfo);
    },

    fetchTicketOfficeListApi(showtimeCode) {
        return callApi(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${showtimeCode}`);
    },

    bookTicketApi(bookTicketInfo = new ThongTinDatVe()) {
        return callApi(`/QuanLyDatVe/DatVe`, 'POST', bookTicketInfo);
    },

    fetchUserInfoApi() {
        return callApi(`/QuanLyNguoiDung/ThongTinTaiKhoan`, 'POST');
    },
    addMovieUploadImage(formData){
        return callApi('QuanLyPhim/ThemPhimUploadHinh', 'POST', formData);
    },
    fetchMovieInfoApi(maPhim) {
        return callApi(`QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
    },
    editMovieInfoApi(formData) {
        return callApi('QuanLyPhim/CapNhatPhimUpload', 'POST', formData);
    },
};

export default movieApi;
