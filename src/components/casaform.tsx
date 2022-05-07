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

import { useApiUrl, useTranslate } from "@pankod/refine-core";
import { useState } from "react";
import { Hidden } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

const { TextArea } = Input;
const CasaForm = (props: any) => {
  const apiUrl = useApiUrl();
  const t = useTranslate();
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");
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
      <Form.Item label="forSale" name="forSale">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item
        label={t("casas.fields.valorVenda")}
        name="valorVenda"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="forRent" name="forRent">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="forArrenda" name="forArrenda">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item
        label={t("casas.fields.valorArrenda")}
        name="valorVenda"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Caucao" name="caucao">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item
        label={t("casas.fields.valorcaucao")}
        name="valorcaucao"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="certifEnerg" name="certifEnerg">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item
        label={t("casas.fields.certifEnerg")}
        name="certifEnerg"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("casas.fields.anoContrucao")}
        name="anoContrucao"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("casas.fields.area")}
        name="area"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("casas.fields.titulo")}
        name="titulo"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Proprietario" name="proprietario">
        <Input hidden defaultValue={useAuth0().user?.email} />
      </Form.Item>
      <Form.Item label="Tipo" name="tipo">
        <Select {...props.tipoSelectProps} />
      </Form.Item>
      <Form.Item label="Destino" name="destino">
        <Select {...props.destinoSelectProps} />
      </Form.Item>

      <Form.Item
        label={t("casas.fields.seoTitle")}
        name="seoTitle"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={t("casas.fields.designacao")}
        name="designacao"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
      </Form.Item>
    </Form>
  );
};

export default CasaForm;
