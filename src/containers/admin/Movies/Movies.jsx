import { Button, Input, Table, Typography, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchAllMovie } from './module/action';
import { NavLink } from 'react-router-dom';
import { history } from 'App';

const { Search } = Input;
const { Text, Title } = Typography;

const handleErrorImage = (e, index) => {
    e.target.onerror = null;
    e.target.src = `https://picsum.photos/${index}/100/100`;
};

function Movies(props) {
    const { movieList } = useSelector((state) => state.movieReducer);

    const dispatch = useDispatch();

    console.log('danh sach phim: ', movieList);

    useEffect(() => {
        dispatch(actFetchAllMovie());
    }, []);

    const columns = [
        {
            title: 'Mã phim',
            dataIndex: 'maPhim',

            sorter: (a, b) => a.maPhim - b.maPhim,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            render: (text, movie, index) => {
                return (
                    <Fragment>
                        <img
                            src={movie.hinhAnh}
                            alt={movie.hinhAnh}
                            width="100"
                            height="100"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://picsum.photos/id/${index}/100/100`;
                            }}
                        />
                    </Fragment>
                );
            },
        },
        {
            title: 'Tên phim',
            dataIndex: 'tenPhim',
            sorter: (a, b) => {
                let tenPhimA = a.tenPhim.toLowerCase().trim();
                let tenPhimB = b.tenPhim.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Mô tả',
            dataIndex: 'moTa',
            render: (text, movie) => {
                return (
                    <Fragment>
                        {movie.moTa.length > 50 ? movie.moTa.substr(0, 50) + '...' : movie.moTa}
                    </Fragment>
                );
            },
        },
        {
            title: 'Hành động',
            dataIndex: 'hanhDong',
            render: () => {
                return (
                    <Fragment>
                        <div className="icons-list">
                            <Space>
                                <NavLink to="/admin/movies/edit">
                                    <Text type="success">
                                        <EditOutlined style={{ fontSize: 20 }} />
                                    </Text>
                                </NavLink>
                                <NavLink to="/admin/">
                                    <Text type="danger">
                                        <DeleteOutlined style={{ fontSize: 20 }} />
                                    </Text>
                                </NavLink>
                            </Space>
                        </div>
                    </Fragment>
                );
            },
        },
    ];

    const data = movieList;

    const onSearch = (value) => console.log(value);

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    const handleRouteToAddMoive = () => {
        props.history.push('/admin/movies/add-movie');
    };

    return (
        <div>
            <Title level={2}>Quản lý Phim</Title>
            <Button type="primary" onClick={handleRouteToAddMoive}>
                Thêm phim
            </Button>
            <div style={{ margin: '15px 0' }} />
            <Search placeholder="input search text" onSearch={onSearch} enterButton />
            <div style={{ margin: '15px 0' }} />
            <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
    );
}

export default Movies;
