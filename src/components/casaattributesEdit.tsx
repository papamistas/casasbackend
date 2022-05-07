import { IResourceComponentsProps } from "@pankod/refine-core";
import { Edit, useForm } from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";
import { ICasaattributes } from "interfaces";
import Casaattributesform from "./casaattributesform";

export const CasaattributesEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, setId } = useForm<ICasaattributes>({
    action: "edit",
    resource: "casas",
    redirect: false,
  });

  return (
    <>
      <Edit saveButtonProps={saveButtonProps}>
        <Casaattributesform formProps={formProps}></Casaattributesform>
      </Edit>
    </>
  );
};
