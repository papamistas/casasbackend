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

import {useApiUrl, useTranslate} from "@pankod/refine-core";


const Casaimagesform = (props: any) => {
    const apiUrl = useApiUrl();
    const t = useTranslate();
    return (

        <Form {...props.formProps} layout="vertical">
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


        </Form>
    );
};

export default Casaimagesform;