import { useState } from "react";
import { useTranslate, IResourceComponentsProps } from "@pankod/refine-core";
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
import { useApiUrl } from "@pankod/refine-core";
import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";

import "react-mde/lib/styles/css/react-mde-all.css";

import { ICasa, IDestino, ITipo } from "interfaces";

export const CasaCreate: React.FC<IResourceComponentsProps> = () => {
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

  const t = useTranslate();

  const { formProps, saveButtonProps } = useForm<ICasa>();

  const { selectProps: destinoSelectProps } = useSelect<IDestino>({
    resource: "destinos",
    optionLabel: "destino",
    optionValue: "idDestino",
  });
  const { selectProps: tipoSelectProps } = useSelect<ITipo>({
    resource: "tipos",
    optionLabel: "tipo",
    optionValue: "idTipo",
  });
  const apiUrl = useApiUrl();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        {/*<Form.Item
                    label={t("casas.fields.tipo")}
                    name="tipo"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>*/}
        <Form.Item label="Tipo" name="tipo">
          <Select {...tipoSelectProps} />
        </Form.Item>

        <Form.Item label="Destino" name="destino">
          <Select {...destinoSelectProps} />
        </Form.Item>

        {/* <Form.Item
                    label={t("casas.fields.destino")}
                    name="destino"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>*/}
        <Form.Item
          label={t("casas.fields.localidade")}
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
        <Form.Item label="Image">
          <Form.Item
            name="image"
            valuePropName="fileList"
            getValueFromEvent={getValueFromEvent}
            noStyle
          >
            <Upload.Dragger
              name="file"
              action={`${apiUrl}/media/upload`}
              listType="picture"
              maxCount={5}
              multiple
            >
              <p className="ant-upload-text">Drag & drop a file in this area</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
        <ReactMde
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
          generateMarkdownPreview={(markdown) =>
            Promise.resolve(<ReactMarkdown>{markdown}</ReactMarkdown>)
          }
        />
      </Form>
    </Create>
  );
};
