import React, { Component } from 'react';

export default class HomeNews extends Component {
    render() {
        return (
            <section className="blog">
                <div className="blog__content container">
                    <ul
                        className="nav nav-tabs justify-content-center align-items-center"
                        id="myTab"
                        role="tablist"
                    >
                        <li className="nav-item" role="presentation">
                            <a
                                className="nav-link active"
                                id="home-tab"
                                data-toggle="tab"
                                href="#showFilm"
                                role="tab"
                                aria-controls="home"
                                aria-selected="true"
                            >
                                Điện Ảnh
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a
                                className="nav-link"
                                id="profile-tab"
                                data-toggle="tab"
                                href="#showReview"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                            >
                                Review
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a
                                className="nav-link"
                                id="contact-tab"
                                data-toggle="tab"
                                href="#showPromotion"
                                role="tab"
                                aria-controls="contact"
                                aria-selected="false"
                            >
                                Khuyến Mãi
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div
                            className="tab-pane fade show active"
                            id="showFilm"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                        >
                            <div className="row blog__top">
                                <div className="col-sm-6 blog__item">
                                    <div className="blog__image">
                                        <a href="true">
                                            <img src="./img/blog/lat-mat.png" />
                                        </a>
                                    </div>
                                    <div className="blog__text">
                                        <h3>
                                            <a href="true">
                                                Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung
                                                clip Lật Mặt: 48H đậm chất{' '}
                                            </a>
                                        </h3>
                                        <p>
                                            Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung
                                            clip rượt đuổi gay cấn thót tim fans hâm mộ
                                        </p>
                                    </div>
                                    <div className="blog__icon">
                                        <span className="blog__icon--like">
                                            <img src="./img/like.png" />
                                            <span>128</span>
                                        </span>
                                        <span className="blog__icon--comment">
                                            <img src="./img/comment.png" />
                                            <span>63</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-sm-6 blog__item">
                                    <div className="blog__image">
                                        <a href="true">
                                            <img src="./img/blog/mortal-kombat.png" />
                                        </a>
                                    </div>
                                    <div className="blog__text">
                                        <h3>
                                            <a href="true">
                                                [MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG
                                                PHIM ĐIỆN ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC
                                                TỰA...
                                            </a>
                                        </h3>
                                        <p>
                                            Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ,
                                            Hollywood cũng không thiếu những tác phẩm đình đám được
                                            chuyển thể từ tiểu thuyết, phim hoạt hình, hay thậm chí
                                            là cả trò chơi điện tử.
                                        </p>
                                    </div>
                                    <div className="blog__icon">
                                        <span className="blog__icon--like">
                                            <img src="./img/like.png" />
                                            <span>38</span>
                                        </span>
                                        <span className="blog__icon--comment">
                                            <img src="./img/comment.png" />
                                            <span>18</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row blog__bot">
                                <div className="col-12 col-sm-4 blog__item">
                                    <div className="blog__image">
                                        <a href="true">
                                            <img src="./img/blog/promising-young-woman.png" />
                                        </a>
                                    </div>
                                    <div className="blog__text">
                                        <h3>
                                            <a href="true">
                                                PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey
                                                Mulligan và màn trả thù...
                                            </a>
                                        </h3>
                                        <p>
                                            Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở
                                            hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu"
                                            nhất sự nghiệp của cô trong phim
                                        </p>
                                    </div>
                                    <div className="blog__icon">
                                        <span className="blog__icon--like">
                                            <img src="./img/like.png" />
                                            <span>125</span>
                                        </span>
                                        <span className="blog__icon--comment">
                                            <img src="./img/comment.png" />
                                            <span>50</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-4 blog__item">
                                    <div className="blog__image">
                                        <a href="true">
                                            <img src="./img/blog/vua-dep-lai-vua-tai-nang.png" />
                                        </a>
                                    </div>
                                    <div className="blog__text">
                                        <h3>
                                            <a href="true">
                                                VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN
                                                TAY DIỆT QUỶ”...
                                            </a>
                                        </h3>
                                        <p>
                                            Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao
                                            về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và
                                            Choi Woo Sik, tác phẩm kinh dị – hành
                                        </p>
                                    </div>
                                    <div className="blog__icon">
                                        <span className="blog__icon--like">
                                            <img src="./img/like.png" />
                                            <span>999</span>
                                        </span>
                                        <span className="blog__icon--comment">
                                            <img src="./img/comment.png" />
                                            <span>500</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-4 blog__item--list">
                                    <div className="row">
                                        <div className="col-12 blog__item--miniPost">
                                            <div className="blog__item--image">
                                                <a href="true">
                                                    <img src="./img/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg" />
                                                </a>
                                            </div>
                                            <div className="blog__item--title">
                                                <a href="true">
                                                    <p>
                                                        Khai trương rạp xịn giá ngon, chuẩn xì-tai
                                                        Sài Gòn
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 blog__item--miniPost">
                                            <div className="blog__item--image">
                                                <a href="true">
                                                    <img src="./img/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png" />
                                                </a>
                                            </div>
                                            <div className="blog__item--title">
                                                <a href="true">
                                                    <p>
                                                        “Bóc tem” tổ hợp giải trí mới toanh của giới
                                                        Hà Thành
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 blog__item--miniPost">
                                            <div className="blog__item--image">
                                                <a href="true">
                                                    <img src="./img/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png" />
                                                </a>
                                            </div>
                                            <div className="blog__item--title">
                                                <a href="true">
                                                    <p>
                                                        Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ
                                                        sau 2 tuần công chiếu{' '}
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 blog__item--miniPost">
                                            <div className="blog__item--image">
                                                <a href="true">
                                                    <img src="./img/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg" />
                                                </a>
                                            </div>
                                            <div className="blog__item--title">
                                                <a href="true">
                                                    <p>
                                                        NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI
                                                        THIẾT KẾ...
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog__btn text-center mt-5">
                                <button>xem thêm</button>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="showReview"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                        >
                            <div className="row blog__top">
                                <div className="col-sm-6 blog__item">
                                    <div className="blog__image">
                                        <a href="true">
                                            <img src="./img/blog/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png" />
                                        </a>
                                    </div>
                                    <div className="blog__text">
                                        <h3>
                                            <a href="true">
                                                Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối
                                                liên kết
                                            </a>
                                        </h3>
                                        <p>
                                            Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích
                                            Quỷ Ám
                                        </p>
                                    </div>
                                    <div className="blog__icon">
                                        <span className="blog__icon--like">
                                            <img src="./img/like.png" />
                                            <span>128</span>
                                        </span>
                                        <span className="blog__icon--comment">
                                            <img src="./img/comment.png" />
                                            <span>63</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-sm-6 blog__item">
                                    <div className="blog__image">
                                        <a href="true">
                                            <img src="./img/blog/review-dinh-thu-oan.png" />
                                        </a>
                                    </div>
                                    <div className="blog__text">
                                        <h3>
                                            <a href="true">
                                                Review: Dinh Thự Oan Khuất (Ghost Of War)
                                            </a>
                                        </h3>
                                        <p>
                                            Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh
                                            Thự Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng
                                            vé!
                                        </p>
                                    </div>
                                    <div className="blog__icon">
                                        <span className="blog__icon--like">
                                            <img src="./img/like.png" />
                                            <span>38</span>
                                        </span>
                                        <span className="blog__icon--comment">
                                            <img src="./img/comment.png" />
                                            <span>18</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row blog__bot">
                                <div className="col-12 col-sm-4 blog__item">
                                    <div className="blog__image">
                                        <a href="true">
                                            <img src="./img/blog/blackkklansman-coc-nuoc-lanh.png" />
                                        </a>
                                    </div>
                                    <div className="blog__text">
                                        <h3>
                                            <a href="true">
                                                ‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức
                                                tỉnh
                                            </a>
                                        </h3>
                                        <p>
                                            Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019
                                            của đạo diễn Spike Lee là một lát cắt nữa về nạn phân
                                            biệt chủng tộc - nỗi đau gây nhức.
                                        </p>
                                    </div>
                                    <div className="blog__icon">
                                        <span className="blog__icon--like">
                                            <img src="./img/like.png" />
                                            <span>125</span>
                                        </span>
                                        <span className="blog__icon--comment">
                                            <img src="./img/comment.png" />
                                            <span>50</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-4 blog__item">
                                    <div className="blog__image">
                                        <a href="true">
                                            <img src="./img/blog/american-sniper-chinh-nghia.png" />
                                        </a>
                                    </div>
                                    <div className="blog__text">
                                        <h3>
                                            <a href="true">
                                                American Sniper - Chính nghĩa hay phi nghĩa?
                                            </a>
                                        </h3>
                                        <p>
                                            American Sniper khắc họa một tay súng bắn tỉa “huyền
                                            thoại” của Hải quân Mỹ với 4 lần tham chiến ở Trung
                                            Đông. Câu chuyện phim chậm rãi đưa người
                                        </p>
                                    </div>
                                    <div className="blog__icon">
                                        <span className="blog__icon--like">
                                            <img src="./img/like.png" />
                                            <span>999</span>
                                        </span>
                                        <span className="blog__icon--comment">
                                            <img src="./img/comment.png" />
                                            <span>500</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-4 blog__item--list">
                                    <div className="row">
                                        <div className="col-12 blog__item--miniPost">
                                            <div className="blog__item--image">
                                                <a href="true">
                                                    <img src="./img/blog/review-spider-man-into-the-spider-vesre-15886520889426.png" />
                                                </a>
                                            </div>
                                            <div className="blog__item--title">
                                                <a href="true">
                                                    <p>
                                                        Review: Spider-Man: Into The Spider-Vesre{' '}
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 blog__item--miniPost">
                                            <div className="blog__item--image">
                                                <a href="true">
                                                    <img src="./img/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png" />
                                                </a>
                                            </div>
                                            <div className="blog__item--title">
                                                <a href="true">
                                                    <p>
                                                        “Bóc tem” tổ hợp giải trí mới toanh của giới
                                                        Hà Thành
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 blog__item--miniPost">
                                            <div className="blog__item--image">
                                                <a href="true">
                                                    <img src="./img/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png" />
                                                </a>
                                            </div>
                                            <div className="blog__item--title">
                                                <a href="true">
                                                    <p>
                                                        Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ
                                                        sau 2 tuần công chiếu{' '}
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 blog__item--miniPost">
                                            <div className="blog__item--image">
                                                <a href="true">
                                                    <img src="./img/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg" />
                                                </a>
                                            </div>
                                            <div className="blog__item--title">
                                                <a href="true">
                                                    <p>
                                                        NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI
                                                        THIẾT KẾ...
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog__btn text-center mt-5">
                                <button>xem thêm</button>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="showPromotion"
                            role="tabpanel"
                            aria-labelledby="contact-tab"
                        >
                            <div className="row blog__top">
                                <div className="col-sm-6 blog__item">
                                    <div className="blog__image">
                                        <a href="true">
                                            <img src="./img/blog/bhd-59k-ve-ca-tuan-16190002421777.jpg" />
                                        </a>
                                    </div>
                                    <div className="blog__text">
                                        <h3>
                                            <a href="true">BHD 59K/VÉ CẢ TUẦN !!!</a>
                                        </h3>
                                        <p>
                                            Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với
                                            giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên
                                            ZaloPay.
                                        </p>
                                    </div>
                                    <div className="blog__icon">
                                        <span className="blog__icon--like">
                                            <img src="./img/like.png" />
                                            <span>128</span>
                                        </span>
                                        <span className="blog__icon--comment">
                                            <img src="./img/comment.png" />
                                            <span>63</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-sm-6 blog__item">
                                    <div className="blog__image">
                                        <a href="true">
                                            <img src="./img/blog/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg" />
                                        </a>
                                    </div>
                                    <div className="blog__text">
                                        <h3>
                                            <a href="true">TIX 1K/VÉ NGẠI CHI GIÁ VÉ</a>
                                        </h3>
                                        <p>
                                            Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận
                                            thêm 02 voucher thanh toán ZaloPay thả ga
                                        </p>
                                    </div>
                                    <div className="blog__icon">
                                        <span className="blog__icon--like">
                                            <img src="./img/like.png" />
                                            <span>38</span>
                                        </span>
                                        <span className="blog__icon--comment">
                                            <img src="./img/comment.png" />
                                            <span>18</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row blog__bot">
                                <div className="col-12 col-sm-4 blog__item">
                                    <div className="blog__image">
                                        <a href="true">
                                            <img src="./img/blog/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png" />
                                        </a>
                                    </div>
                                    <div className="blog__text">
                                        <h3>
                                            <a href="true">ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX </a>
                                        </h3>
                                        <p>
                                            ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và
                                            Phúc chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt
                                            vé qua TIX.
                                        </p>
                                    </div>
                                    <div className="blog__icon">
                                        <span className="blog__icon--like">
                                            <img src="./img/like.png" />
                                            <span>125</span>
                                        </span>
                                        <span className="blog__icon--comment">
                                            <img src="./img/comment.png" />
                                            <span>50</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-4 blog__item">
                                    <div className="blog__image">
                                        <a href="true">
                                            <img src="./img/blog/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg" />
                                        </a>
                                    </div>
                                    <div className="blog__text">
                                        <h3>
                                            <a href="true">BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!</a>
                                        </h3>
                                        <p>
                                            Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với
                                            giá 59k/vé khi mua vé trên TIX và thanh toán bằng
                                            ZaloPay hoặc Mục Vé Phim trên ZaloPay.
                                        </p>
                                    </div>
                                    <div className="blog__icon">
                                        <span className="blog__icon--like">
                                            <img src="./img/like.png" />
                                            <span>999</span>
                                        </span>
                                        <span className="blog__icon--comment">
                                            <img src="./img/comment.png" />
                                            <span>500</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-4 blog__item--list">
                                    <div className="row">
                                        <div className="col-12 blog__item--miniPost">
                                            <div className="blog__item--image">
                                                <a href="true">
                                                    <img src="./img/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg" />
                                                </a>
                                            </div>
                                            <div className="blog__item--title">
                                                <a href="true">
                                                    <p>
                                                        Beta Cineplex trở lại với hàng loạt ưu đãi
                                                        lớn
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 blog__item--miniPost">
                                            <div className="blog__item--image">
                                                <a href="true">
                                                    <img src="./img/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png" />
                                                </a>
                                            </div>
                                            <div className="blog__item--title">
                                                <a href="true">
                                                    <p>
                                                        [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ
                                                        diệt 11k/vé Anh...
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 blog__item--miniPost">
                                            <div className="blog__item--image">
                                                <a href="true">
                                                    <img src="./img/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png" />
                                                </a>
                                            </div>
                                            <div className="blog__item--title">
                                                <a href="true">
                                                    <p>
                                                        [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k
                                                        khi đặt vé Pháp...
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 blog__item--miniPost">
                                            <div className="blog__item--image">
                                                <a href="true">
                                                    <img src="./img/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg" />
                                                </a>
                                            </div>
                                            <div className="blog__item--title">
                                                <a href="true">
                                                    <p>[Mega GS] Một đoá hoa thay ngàn lời yêu</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog__btn text-center mt-5">
                                <button>xem thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
