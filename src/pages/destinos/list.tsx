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
import { IDestino } from "interfaces";

export const DestinoList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { tableProps, sorter } = useTable<IDestino>({
    initialSorter: [
      {
        field: "idDestino",
        order: "desc",
      },
    ],
  });

  return (
    <List>
      <Table {...tableProps} rowKey="idDestino">
        <Table.Column
          dataIndex="idDestino"
          key="idDestino"
          title="ID"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("idDestino", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="destino"
          key="destino"
          title={t("destinos.fields.destino")}
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("destino", sorter)}
          sorter
        />

        <Table.Column<IDestino>
          title={t("table.actions")}
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton
                hideText
                size="small"
                recordItemId={record.idDestino}
              />
              <ShowButton
                hideText
                size="small"
                recordItemId={record.idDestino}
              />
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.idDestino}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
