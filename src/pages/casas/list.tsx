import {
    useTranslate,
    IResourceComponentsProps,
    useMany
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

import {ImageList, ImageListItem} from "@mui/material";
import {useList} from "@pankod/refine-core";
import {useAuth0} from "@auth0/auth0-react";


export const CasaList: React.FC<IResourceComponentsProps> = () => {
    const t = useTranslate();


    const casasdt = useList<ICasa>({
        resource: "casas",
        config: {
            filters: [
                {
                    field: "proprietario",
                    operator: "eq",
                    value: useAuth0().user?.email,
                },
            ],
        },
    }) ?? [];

    const {tableProps, sorter} = useTable<ICasa>({
        initialSorter: [
            {
                field: "codCasa",
                order: "desc",
            },
        ],
        /*initialFilter: [
            {
                field: "propid",
                operator: "eq",
                value: 35,
            },
        ],*/
        permanentFilter: [
            {
                field: "proprietario",
                operator: "eq",
                value: useAuth0().user?.email,
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
        optionValue: "idTipo",
    });
    return (
        <List>
            <ImageList sx={{width: 500, height: 450}} cols={3} rowHeight={164}>
                {casasdt.data?.data?.map((item) => (
                    <ImageListItem key={item.codCasa}>
                        <img
                            src={`${item.casaimages.img1}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.casaimages.img1}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.seoTitle}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))} :

            </ImageList>
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
