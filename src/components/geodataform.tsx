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

import {useTranslate} from "@pankod/refine-core";


const Geodataform = (props: any) => {
    const t = useTranslate();
    return (

        <Form layout="vertical">
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

export default Geodataform;