import { IResourceComponentsProps } from "@pankod/refine-core";
import { Edit, useSelect, useForm } from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";
import { ICasa, IDestino, ITipo } from "interfaces";
import CasaForm from "components/casaform";

export const CasaEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<ICasa>({
    action: "edit",
    resource: "casas",
    redirect: false,
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
    <>
      <Edit saveButtonProps={saveButtonProps}>
        <CasaForm
          formProps={formProps}
          destinoSelectProps={destinoSelectProps}
          tipoSelectProps={tipoSelectProps}
        ></CasaForm>
      </Edit>
    </>
  );
};
