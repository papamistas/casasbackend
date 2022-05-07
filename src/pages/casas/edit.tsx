import Stepformedit from "components/stepformedit";

import React from "react";

/*
export const CasaEdit: React.FC<IResourceComponentsProps> = () => {
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

  const t = useTranslate();

  const { formProps, saveButtonProps, queryResult } = useForm<ICasa>();

  const { selectProps: destinoSelectProps } = useSelect<IDestino>({
    resource: "destinos",
    optionLabel: "destino",
    optionValue: "idDestino",
    defaultValue: queryResult?.data?.data.destino.idDestino,
  });
  const { selectProps: tipoSelectProps } = useSelect<ITipo>({
    resource: "tipos",
    optionLabel: "tipo",
    optionValue: "idTipo",
    defaultValue: queryResult?.data?.data.tipo,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={t("casas.fields.seoTitle")}
          name="seoTitle"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <ReactMde
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={(markdown) =>
              Promise.resolve(<ReactMarkdown>{markdown}</ReactMarkdown>)
            }
          />
        </Form.Item>
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
          label={t("casas.fields.tipo.title")}
          name="tipo"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...tipoSelectProps} />
        </Form.Item>

        <Form.Item
          label={t("casas.fields.destino.title")}
          name="destino"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...destinoSelectProps} />
        </Form.Item>
      </Form>
    </Edit>
  );
};
*/

export const CasaEdit = () => {
  return (
    <>
      <Stepformedit></Stepformedit>
    </>
  );
};
