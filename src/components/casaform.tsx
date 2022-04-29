import {Form, Input, Button, Space, Select} from 'antd';
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';


const CasaForm = () => {
    const [form] = Form.useForm();


    return (
        <Form form={form} name="dynamic_form_nest_item" autoComplete="off">
            <Form.Item name="area" label="Area" rules={[{required: true, message: 'Missing area'}]}>
                <input/>
            </Form.Item>
            <Form.Item name="test" label="test" rules={[{required: true, message: 'Missing area'}]}>
                <input/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CasaForm;