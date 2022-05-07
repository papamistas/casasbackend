import {
  Upload,
  getValueFromEvent,
  Create,
  Form,
  Input,
  Select,
  useSelect,
  useForm,
} from "@pankod/refine-antd";

import { useTranslate } from "@pankod/refine-core";

const Geodataform = (props: any) => {
  const t = useTranslate();
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  return (
    <Form {...props.formProps} {...formItemLayout} layout="horizontal">
      <Form.Item
        label="pais"
        name="pais"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="distrito"
        name="distrito"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="concelho"
        name="concelho"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="localidade"
        name="localidade"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="codpostal"
        name="codpostal"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="lat"
        name="lat"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="long"
        name="long"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="altitude"
        name="altitude"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      //todo get distance from sea
    </Form>
  );
};

export default Geodataform;
