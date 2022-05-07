import { IResourceComponentsProps } from "@pankod/refine-core";
import { Edit, useForm } from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";
import { ICasaamenities, ICasa } from "interfaces";
import Casaamenitiesform from "./casaamenitiesform";

export const CasaamenitiesEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, setId } = useForm<ICasaamenities>({
    action: "edit",
    resource: "casas",
    redirect: false,
  });

  return (
    <>
      <Edit saveButtonProps={saveButtonProps}>
        <Casaamenitiesform formProps={formProps}></Casaamenitiesform>
      </Edit>
    </>
  );
};
