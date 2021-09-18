import { GROUP_ID } from 'settings/apiConfig';
import callApi from 'utils/callApi';

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
        return callApi(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
    },

    loginApi(userInfo) {
        return callApi('/QuanLyNguoiDung/DangNhap', 'POST', userInfo);
    },
};

export default movieApi;
