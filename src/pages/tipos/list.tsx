import { useState } from "react";

import {
  useTranslate,
  IResourceComponentsProps,
  useMany,
  useOne,
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
import { ITipo } from "interfaces";

export const TipoList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { tableProps, sorter } = useTable<ITipo>({
    initialSorter: [
      {
        field: "id_tipo",
        order: "desc",
      },
    ],
  });

  return (
    <List>
      <Table {...tableProps} rowKey="idTipo">
        <Table.Column
          dataIndex="idTipo"
          key="idTipo"
          title="ID"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("idTipo", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="tipo"
          key="tipo"
          title={t("tipos.fields.tipo")}
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("tipo", sorter)}
          sorter
        />

        <Table.Column<ITipo>
          title={t("table.actions")}
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.idTipo} />
              <ShowButton hideText size="small" recordItemId={record.idTipo} />
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.idTipo}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
