import { Button, Input, Table, Typography } from 'antd';
import React, { useEffect } from 'react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchAllMovie } from './module/action';

const { Search } = Input;
const { Title } = Typography;

const handleErrorImage = (e, index) => {
    e.target.onerror = null;
    e.target.src = `https://picsum.photos/${index}/100/100`;
};

function Films(props) {
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
        },
        {
            title: 'Hành động',
            dataIndex: 'address',
        },
    ];

    const data = movieList;

    const onSearch = (value) => console.log(value);

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    return (
        <div>
            <Title level={2}>Quản lý Phim</Title>
            <Button type='primary'>Thêm phim</Button>
            <div style={{ margin: '15px 0' }} />
            <Search
                placeholder='input search text'
                onSearch={onSearch}
                enterButton
            />
            <div style={{ margin: '15px 0' }} />
            <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
    );
}

export default Films;
