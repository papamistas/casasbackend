import { IResourceComponentsProps } from "@pankod/refine-core";
import { Create, useSelect, useForm } from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";
import { ICasaattributes } from "interfaces";
import Casaattributesform from "components/casaattributesformCreate";

export const CasaattributesCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<ICasaattributes>({
    action: "create",
    resource: "casaattributes",
  });

  return (
    <>
      <Create saveButtonProps={saveButtonProps}>
        <Casaattributesform formProps={formProps}></Casaattributesform>
      </Create>
    </>
  );
};
