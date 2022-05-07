import { IResourceComponentsProps } from "@pankod/refine-core";
import { Create, useSelect, useForm } from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";
import { ICasaamenities, ICasageodata } from "interfaces";
import Geodataform from "components/geodataform";
import Casaamenitiesform from "./casaamenitiesform";

export const CasaamenitiesCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<ICasaamenities>({
    action: "create",
    resource: "casaamenities",
    redirect: false,
  });

  return (
    <>
      <Create saveButtonProps={saveButtonProps}>
        <Casaamenitiesform formProps={formProps}></Casaamenitiesform>
      </Create>
    </>
  );
};
