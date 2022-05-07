import {
  Upload,
  getValueFromEvent,
  Create,
  Form,
  Input,
  Select,
  useSelect,
  useForm,
  Switch,
} from "@pankod/refine-antd";

import { useTranslate } from "@pankod/refine-core";

const Casaamenitiesform = (props: any) => {
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
        label="quartos"
        name="quartos"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="camassingle"
        name="camassingle"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="camascasal"
        name="camascasal"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="casasbanho"
        name="casasbanho"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="animais" name="animais">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="fumadores" name="fumadores">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="deficientes" name="deficientes">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
    </Form>
  );
};

export default Casaamenitiesform;
