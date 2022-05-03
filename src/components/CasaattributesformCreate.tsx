import {
  Switch,
  Upload,
  getValueFromEvent,
  Create,
  Form,
  Input,
  Select,
  useSelect,
  useForm,
} from "@pankod/refine-antd";

import {useTranslate} from "@pankod/refine-core";

const formItemLayout = {
  labelCol: {
    xs: {span: 24},
    sm: {span: 8},
  },
  wrapperCol: {
    xs: {span: 24},
    sm: {span: 16},
  },
};
const Casaattributesform = (props: any) => {
  const t = useTranslate();
  return (
      <Form
          {...props.formProps}
          {...formItemLayout}
          /*labelAlign={"left"} */ layout="horizontal"
      >
        <Form.Item
            label="pais"
            name="pais"
            rules={[
              {
                required: true,
              },
            ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item label="Piscina" name="piscina">
          <Switch checkedChildren="Yes" unCheckedChildren="No"/>
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
          <Input/>
        </Form.Item>


      </Form>
  );
};

export default Casaattributesform;
