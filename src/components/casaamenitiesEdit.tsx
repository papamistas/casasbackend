import { IResourceComponentsProps, useResource } from "@pankod/refine-core";
import { Edit, useForm } from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";
import { ICasaamenities } from "interfaces";
import Casaamenitiesform from "./casaamenitiesform";

export const CasaamenitiesEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<ICasaamenities>({
    action: "edit",
    resource: "casas", // todo on submit change to Amenities resource
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
