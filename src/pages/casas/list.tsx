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
  ImageField,
} from "@pankod/refine-antd";
import { ICasa, IDestino, ITipo, ICasaimages } from "interfaces";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/material/Icon";
import { useList } from "@pankod/refine-core";
import { useAuth0 } from "@auth0/auth0-react";

export const CasaList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const casasdt =
    useList<ICasa>({
      resource: "casas",
      config: {
        filters: [
          {
            field: "activo",
            operator: "eq",
            value: 1,
          },
          {
            field: "proprietario",
            operator: "eq",
            value: useAuth0().user?.email,
          },
        ],
      },
    }) ?? [];

  const { tableProps, sorter } = useTable<ICasa>({
    initialSorter: [
      {
        field: "tipo",
        order: "asc",
      },
      {
        field: "cod_casa",
        order: "desc",
      },
    ],
    permanentFilter: [
      {
        field: "proprietario",
        operator: "eq",
        value: useAuth0().user?.email,
      },
      {
        field: "activo",
        operator: "eq",
        value: 1,
      },
      {
        field: "XDEBUG_SESSION_START",
        operator: "eq",
        value: "PHPSTORM",
      },
    ],
  });

  const casaimagesIds =
    tableProps?.dataSource?.map((item) => item.casaimages.id) ?? [];
  const { data: casaimagesData, isLoading } = useMany<ICasaimages>({
    resource: "casaimages",
    ids: casaimagesIds,
    queryOptions: {
      enabled: casaimagesIds.length > 0,
    },
  });

  const destinoIds =
    tableProps?.dataSource?.map((item) => item.destino.idDestino) ?? [];
  const { data: destinosData } = useMany<IDestino>({
    resource: "destinos",
    ids: destinoIds,
    queryOptions: {
      enabled: destinoIds.length > 0,
    },
  });

  const tipoIds = tableProps?.dataSource?.map((item) => item.tipo) ?? [];
  const { data: tiposData } = useMany<ITipo>({
    resource: "tipos",
    ids: tipoIds,
    queryOptions: {
      enabled: tipoIds.length > 0,
    },
  });
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

  return (
    //todo create field for user to order images (ex:order)
    <List>
      <ImageList sx={{ width: 200, height: 200 }} cols={1} rowHeight={225}>
        {casasdt?.data?.data?.map((item) => (
          <ImageListItem key={item.codCasa}>
            <img
              src={`${
                casaimagesData?.data.find((it) => it.codCasa === item.codCasa)
                  ?.img1
              }?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${
                casaimagesData?.data.find((it) => it.codCasa === item.codCasa)
                  ?.img1
              }?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.seoTitle}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.seoTitle}
              subtitle={item.codCasa}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.seoTitle}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
        `
      </ImageList>
      <Table {...tableProps} rowKey="codCasa">
        <Table.Column
          dataIndex="codCasa"
          key="codCasa"
          title="Image"
          render={(value) => (
            <ImageList
              sx={{ width: 200, height: 200 }}
              cols={1}
              rowHeight={225}
            >
              <ImageListItem key={value}>
                <img
                  src={`${
                    casaimagesData?.data.find((item) => item.codCasa === value)
                      ?.img1
                  }?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${
                    casaimagesData?.data.find((item) => item.codCasa === value)
                      ?.img1
                  }?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={value}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={value}
                  subtitle={value}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${value}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            </ImageList>
          )}
        />

        <Table.Column
          dataIndex="codCasa"
          key="codCasa"
          title="ID"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("codCasa", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="seoTitle"
          key="seoTitle"
          title={t("casas.fields.seoTitle.title")}
          render={(value) => <TextField value={value} />}
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
                style={{ minWidth: 200 }}
                mode="multiple"
                placeholder={t("casas.fields.tipo.filter.placeholder")}
                {...tipoSelectProps}
              />
            </FilterDropdown>
          )}
          render={(value) => {
            if (isLoading) {
              return <TextField value="Loading..." />;
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
          render={(value) => <TagField value={value} />}
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
                style={{ minWidth: 200 }}
                mode="multiple"
                placeholder={t("casas.fields.destino.filter.placeholder")}
                {...destinoSelectProps}
              />
            </FilterDropdown>
          )}
          render={(value) => {
            if (isLoading) {
              return <TextField value="Loading..." />;
            }

            return (
              <TagField
                value={
                  destinosData?.data.find((item) => item.idDestino === value)
                    ?.destino
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
              <EditButton hideText size="small" recordItemId={record.codCasa} />
              <ShowButton hideText size="small" recordItemId={record.codCasa} />
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
