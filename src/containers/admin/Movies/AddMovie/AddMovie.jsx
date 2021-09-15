import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Upload,
    Switch,
    Typography,
} from 'antd';
import { useFormik } from 'formik';
import { InboxOutlined, PoweroffOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};

function AddMovie(props) {
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            maNhom: 'GP01',
            ngayKhoiChieu: '',
            sapChieu: true,
            dangChieu: true,
            hot: true,
            danhGia: 10,
            hinhAnh: {},
        },
        onSubmit: (values) => {
            console.log(values);
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <Title level={3}>Thêm mới phim</Title>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
                onSubmitCapture={formik.handleSubmit}
            >
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Tên phim:">
                    <Input onChange={formik.handleChange} value={formik.values.firstName} />
                </Form.Item>
                <Form.Item label="Trailer:">
                    <Input />
                </Form.Item>
                <Form.Item label="Mô tả:">
                    <Input />
                </Form.Item>
                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Đang chiếu:" valuePropName="checked">
                    <Switch />
                </Form.Item>
                <Form.Item label="Sắp chiếu:" valuePropName="checked">
                    <Switch />
                </Form.Item>
                <Form.Item label="Hot:" valuePropName="checked">
                    <Switch />
                </Form.Item>
                <Form.Item label="Số sao:">
                    <Input />
                </Form.Item>

                <Form.Item label="Dragger">
                    <Form.Item
                        name="dragger"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        noStyle
                    >
                        <Upload.Dragger name="files" action="/upload.do">
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">
                                Click or drag file to this area to upload
                            </p>
                            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>

                <Form.Item label="Tác vụ:">
                    <button className="bg-blue-300 text-white p-2" type="submit">
                        Thêm phim
                    </button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AddMovie;
