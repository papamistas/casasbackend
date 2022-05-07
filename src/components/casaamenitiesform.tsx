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
        name={["casaamenities", "quartos"]}
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
        name={["casaamenities", "camassingle"]}
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
        name={["casaamenities", "camascasal"]}
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
        name={["casaamenities", "casasbanho"]}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        valuePropName={"checked"}
        label="animais"
        name={["casaamenities", "animais"]}
      >
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item
        valuePropName={"checked"}
        label="fumadores"
        name={["casaamenities", "fumadores"]}
      >
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item
        valuePropName={"checked"}
        label="deficientes"
        name={["casaamenities", "deficientes"]}
      >
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
    </Form>
  );
};

export default Casaamenitiesform;
