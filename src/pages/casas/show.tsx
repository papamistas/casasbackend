import {
    useTranslate,
    IResourceComponentsProps,
    useOne,
    useShow,
} from "@pankod/refine-core";
import {Show, Typography, Tag, MarkdownField, useSelect} from "@pankod/refine-antd";

import {ICasa, IDestino, ITipo} from "interfaces";

const {Title, Text} = Typography;

export const CasaShow: React.FC<IResourceComponentsProps> = () => {
    const t = useTranslate();

    const {queryResult} = useShow<ICasa>();
    const {data, isLoading} = queryResult;
    const record = data?.data;

    const {data: tipoData} = useOne<ITipo>({
        resource: "tipos",
        id: record?.tipo ?? "",
        queryOptions: {
            enabled: !!record?.tipo,
        },
    });


    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{t("casas.fields.seoTitle.title")}</Title>
            <MarkdownField value={record?.seoTitle}/>


            <Title level={5}>{t("casas.fields.tipo.title")}</Title>
            <Text>
                <Tag>{record?.tipo}</Tag>
            </Text>

            <Title level={5}>{t("casas.fields.destino.title")}</Title>
            <Text>{tipoData?.data.tipo}</Text>

            <Title level={5}>{t("posts.fields.localidade.title")}</Title>
            <Text>{record?.localidade}</Text>
        </Show>
    );
};

