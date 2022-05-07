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

import { useTranslate } from "@pankod/refine-core";

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
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
//todo refator this table, remove and or add attributes
const Casaattributesform = (props: any) => {
  const t = useTranslate();
  return (
    <Form {...props.formProps} labelAlign={"right"} layout="inline">
      <Form.Item
        valuePropName={"checked"}
        {...tailFormItemLayout}
        label="Piscina"
        name={["casaattributes", "piscina"]}
      >
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item
        valuePropName={"checked"}
        label="televisao"
        name={["casaattributes", "televisao"]}
      >
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item
        valuePropName={"checked"}
        label="arCondicionado"
        name={["casaattributes", "arCondicionado"]}
      >
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item
        valuePropName={"checked"}
        label="roupascama"
        name={["casaattributes", "roupascama"]}
      >
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item
        valuePropName={"checked"}
        label="roupasbanho"
        name={["casaattributes", "roupasbanho"]}
      >
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item
        valuePropName={"checked"}
        label="limpeza"
        name={["casaattributes", "limpeza"]}
      >
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item
        valuePropName={"checked"}
        label="utilcozinha"
        name="utilcozinha"
      >
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item valuePropName={"checked"} label="fogao" name="fogao">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item valuePropName={"checked"} label="frigorif" name="frigorif">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item valuePropName={"checked"} label="congel" name="congel">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item
        valuePropName={"checked"}
        label="forno"
        {...tailFormItemLayout}
        name="forno"
      >
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item valuePropName={"checked"} label="barbecue" name="barbecue">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item valuePropName={"checked"} label="microndas" name="microndas">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item valuePropName={"checked"} label="mlavaloica" name="mlavaloica">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item valuePropName={"checked"} label="mlavaroupa" name="mlavaroupa">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item valuePropName={"checked"} label="aqcentral" name="aqcentral">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item valuePropName={"checked"} label="satcabo" name="satcabo">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item valuePropName={"checked"} label="internet" name="internet">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item valuePropName={"checked"} label="fengomar" name="fengomar">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item
        valuePropName={"checked"}
        label="estacionamento"
        name="estacionamento"
      >
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item valuePropName={"checked"} label="telefone" name="telefone">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item
        valuePropName={"checked"}
        label="despertador"
        name="despertador"
      >
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item valuePropName={"checked"} label="dvd" name="dvd">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item valuePropName={"checked"} label="torradeira" name="torradeira">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
    </Form>
  );
};
//todo remove some fields ex:dvd, telefone etc..
export default Casaattributesform;
