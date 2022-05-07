import { IResourceComponentsProps } from "@pankod/refine-core";
import { Create, useSelect, useForm } from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";
import { ICasa, IDestino, ITipo } from "interfaces";
import CasaForm from "components/casaform";

export const CasaCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<ICasa>();

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
      <Create saveButtonProps={saveButtonProps}>
        <CasaForm
          formProps={formProps}
          destinoSelectProps={destinoSelectProps}
          tipoSelectProps={tipoSelectProps}
        ></CasaForm>
      </Create>
    </>
  );
};
