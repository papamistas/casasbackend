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
const Casaattributesform = (props: any) => {
  const t = useTranslate();
  return (
    <Form {...props.formProps} labelAlign={"right"} layout="inline">
      <Form.Item {...tailFormItemLayout} label="Piscina" name="piscina">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="televisao" name="televisao">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="arCondicionado" name="arCondicionado">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="roupascama" name="roupascama">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="roupasbanho" name="roupasbanho">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="limpeza" name="limpeza">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="utilcozinha" name="utilcozinha">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="fogao" name="fogao">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="frigorif" name="frigorif">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="congel" name="congel">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="forno" {...tailFormItemLayout} name="forno">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="barbecue" name="barbecue">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="microndas" name="microndas">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="mlavaloica" name="mlavaloica">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="mlavaroupa" name="mlavaroupa">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="aqcentral" name="aqcentral">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="satcabo" name="satcabo">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="internet" name="internet">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="fengomar" name="fengomar">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="estacionamento" name="estacionamento">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="telefone" name="telefone">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="despertador" name="despertador">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="dvd" name="dvd">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="torradeira" name="torradeira">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
    </Form>
  );
};
//todo remove some fields ex:dvd, telefone etc..
export default Casaattributesform;
