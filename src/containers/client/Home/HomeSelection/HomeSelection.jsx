import React, { Component } from "react";

export default class HomeSelection extends Component {
  render() {
    return (
      <div className="products__top">
        <div className="products__homeTool--list">
          <span className="chooseFilm">Phim</span>
          <i className="fa fa-angle-down" />
          <ul className="products__submenu">
            <li>
              <a href="true">Trạng Tí Phiêu Lưu Ký</a>
            </li>
            <li>
              <a href="true">Lật Mặt: 48h</a>
            </li>
            <li>
              <a href="true">Thiên Thần Hộ Mệnh - The Guardian (C18)</a>
            </li>
            <li>
              <a href="true">
                Detective Conan: Scarlet Bullet - Thám Tử Lừng Danh Conan: Viên
                Đạn Đỏ - C13
              </a>
            </li>
            <li>
              <a href="true">Người Nhân Bản - Seobok (C16)</a>
            </li>
            <li>
              <a href="true">Bàn Tay Diệt Quỷ - Evil Expeller (C16)</a>
            </li>
            <li>
              <a href="true">Kẻ Vô Danh - Nobody - C18</a>
            </li>
            <li>
              <a href="true">Hùng Thần Trắng - Great White - C18</a>
            </li>
            <li>
              <a href="true">
                Chiến Binh Cuối Cùng: Cuội Nguồn Của Quỷ - The Last Warrior:
                Root Of Evil - C13
              </a>
            </li>
            <li>
              <a href="true">
                Ong Nhí Phiêu Lưu Ký: Giải Cứu Công Chúa Kiến - Maya The Bee 3:
                The Golden Orb - P
              </a>
            </li>
            <li>
              <a href="true">Nhân Đôi Tình Yêu - Double Party - C13</a>
            </li>
            <li>
              <a href="true">Trùm Cuối Siêu Đẳng - Boss Level - C18</a>
            </li>
            <li>
              <a href="true">The Hypnosis - Con Lắc Tà Thuật - C18</a>
            </li>
            <li>
              <a href="true">Godzilla vs. Kong</a>
            </li>
          </ul>
        </div>
        <div className="products__homeTool--item theater">
          <span className="chooseItem">Rạp</span>
          <i className="fa fa-angle-down" />
          <ul className="products__theater--submenu">
            <li>
              <a href="true">Vui lòng chọn phim</a>
            </li>
          </ul>
        </div>
        <div className="products__homeTool--item date">
          <span className="chooseItem">Ngày xem</span>
          <i className="fa fa-angle-down" />
          <ul className="products__date--submenu">
            <li>
              <a href="true">Vui lòng chọn phim và rạp</a>
            </li>
          </ul>
        </div>
        <div className="products__homeTool--item showtime">
          <span className="chooseItem">Suất chiếu</span>
          <i className="fa fa-angle-down" />
          <ul className="products__showtime--submenu">
            <li>
              <a href="true">Vui lòng chọn phim, rạp và ngày xem</a>
            </li>
          </ul>
        </div>
        <div className="products__homeTool--btn">
          <button type="button" className="btn btn-dark">
            mua vé ngay
          </button>
        </div>
      </div>
    );
  }
}
