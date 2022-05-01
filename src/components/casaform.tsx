import {Form, Input, Button, Space, Select} from 'antd';
import {getValueFromEvent, Upload} from "@pankod/refine-antd";
import ReactMde from "react-mde";
import ReactMarkdown from "react-markdown";
import {useApiUrl, useTranslate} from "@pankod/refine-core";
import {useState} from "react";


const CasaForm = (props: any) => {
    const apiUrl = useApiUrl();
    const t = useTranslate();
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");
    return (

        <Form {...props.formProps} layout="vertical">
            <h2>{props.msg}</h2>

            <Form.Item label="Tipo" name="tipo">
                <Select {...props.tipoSelectProps} />
            </Form.Item>

            <Form.Item label="Destino" name="destino">
                <Select {...props.destinoSelectProps} />
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
                <Input/>
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
                <Input/>
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
    );
};

export default CasaForm;