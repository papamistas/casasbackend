import {
    useTranslate,
    IResourceComponentsProps,
    useMany,
} from "@pankod/refine-core";
import {
    List,
    Table,
    TextField,
    useTable,
    getDefaultSortOrder,
    DateField,
    Space,
    EditButton,
    DeleteButton,
    useSelect,
    TagField,
    FilterDropdown,
    Select,
    ShowButton,
} from "@pankod/refine-antd";
import {ICasa, IDestino, ITipo} from "interfaces";

export const CasaList: React.FC<IResourceComponentsProps> = () => {
    const t = useTranslate();

    const {tableProps, sorter} = useTable<ICasa>({
        initialSorter: [
            {
                field: "codCasa",
                order: "desc",
            },
        ],
    });
    const destinoIds =
        tableProps?.dataSource?.map((item) => item.destino.idDestino) ?? [];
    const {data: destinosData, isLoading} = useMany<IDestino>({
        resource: "destinos",
        ids: destinoIds,
        queryOptions: {
            enabled: destinoIds.length > 0,
        },
    });

    const tipoIds = tableProps?.dataSource?.map((item) => item.tipo) ?? [];
    const {data: tiposData} = useMany<ITipo>({
        resource: "tipos",
        ids: tipoIds,
        queryOptions: {
            enabled: tipoIds.length > 0,
        },
    });

    const {selectProps: destinoSelectProps} = useSelect<IDestino>({
        resource: "destinos",
        optionLabel: "destino",
        optionValue: "idDestino",
    });
    const {selectProps: tipoSelectProps} = useSelect<ITipo>({
        resource: "tipos",
        optionLabel: "tipo",
        optionValue: "tipo",
    });
    return (
        <List>
            <Table {...tableProps} rowKey="codCasa">
                <Table.Column
                    dataIndex="codCasa"
                    key="codCasa"
                    title="ID"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("codCasa", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="seoTitle"
                    key="seoTitle"
                    title={t("casas.fields.seoTitle.title")}
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("seoTitle", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="tipo"
                    key="tipo"
                    title={t("casas.fields.tipo.title")}
                    /*render={(value) => <TagField value={value} />}*/
                    defaultSortOrder={getDefaultSortOrder("tipo", sorter)}
                    sorter
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Select
                                style={{minWidth: 200}}
                                mode="multiple"
                                placeholder={t("casas.fields.tipo.filter.placeholder")}
                                {...tipoSelectProps}
                            />
                        </FilterDropdown>
                    )}
                    render={(value) => {
                        if (isLoading) {
                            return <TextField value="Loading..."/>;
                        }

                        return (
                            <TagField
                                value={
                                    tiposData?.data.find((item) => item.idTipo === value)?.tipo
                                }
                            />
                        );
                    }}
                />

                <Table.Column
                    dataIndex="localidade"
                    key="localidade"
                    // title={t("posts.fields.status.title")}
                    title="Localidade"
                    render={(value) => <TagField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("localidade", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="destino"
                    key="destino"
                    title="destino"
                    // title={t("posts.fields.status.title")}

                    defaultSortOrder={getDefaultSortOrder("destino", sorter)}
                    sorter
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Select
                                style={{minWidth: 200}}
                                mode="multiple"
                                placeholder={t("casas.fields.destino.filter.placeholder")}
                                {...destinoSelectProps}
                            />
                        </FilterDropdown>
                    )}
                    /*render={(value) => <TagField value={value} />}*/
                    render={(value) => {
                        if (isLoading) {
                            return <TextField value="Loading..."/>;
                        }

                        return (
                            <TagField
                                value={
                                    destinosData?.data.find(
                                        (item) => item.idDestino === value
                                    )?.destino
                                }
                            />
                        );
                    }}
                />


                <Table.Column<ICasa>
                    title={t("table.actions")}
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton hideText size="small" recordItemId={record.codCasa}/>
                            <ShowButton hideText size="small" recordItemId={record.codCasa}/>
                            <DeleteButton
                                hideText
                                size="small"
                                recordItemId={record.codCasa}
                            />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
