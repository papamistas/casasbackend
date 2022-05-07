import { IResourceComponentsProps } from "@pankod/refine-core";
import { Edit, useForm } from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";
import { ICasageodata, ICasa } from "interfaces";
import Geodataform from "./geodataform";

export const CasageodatasEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, setId } = useForm<ICasageodata>({
    action: "edit",
    resource: "casas",
    redirect: false,
  });

  return (
    <>
      <Edit saveButtonProps={saveButtonProps}>
        <Geodataform formProps={formProps}></Geodataform>
      </Edit>
    </>
  );
};
