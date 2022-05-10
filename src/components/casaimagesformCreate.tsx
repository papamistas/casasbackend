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

import { useApiUrl, useTranslate } from "@pankod/refine-core";

const Casaimagesform = (props: any) => {
  const apiUrl = useApiUrl();
  const t = useTranslate();
  return (
    <Form {...props.formProps} layout="horizontal">
      <Form.Item
        label="Casa"
        name="codCasa"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Form.Item
          name="img1"
          valuePropName="fileList"
          getValueFromEvent={getValueFromEvent}
          noStyle
        >
          <Upload.Dragger
            name="file"
            action={`${apiUrl}`}
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
