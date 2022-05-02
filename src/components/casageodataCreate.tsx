import {IResourceComponentsProps} from "@pankod/refine-core";
import {
    Create,
    useSelect,
    useForm,
} from "@pankod/refine-antd";


import "react-mde/lib/styles/css/react-mde-all.css";
import {ICasageodata} from "interfaces";
import Geodataform from "components/geodataform"

export const CasageodataCreate: React.FC<IResourceComponentsProps> = () => {


    const {formProps, saveButtonProps} = useForm<ICasageodata>({
        action: "create",
        resource: "casageodatas",
        redirect: false
    });


    return (
        <>
            <Create saveButtonProps={saveButtonProps}>
                <Geodataform formProps={formProps}></Geodataform>
            </Create>
        </>
    );
};