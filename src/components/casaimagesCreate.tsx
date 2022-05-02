import {IResourceComponentsProps} from "@pankod/refine-core";
import {
    Create,
    useSelect,
    useForm,
} from "@pankod/refine-antd";


import "react-mde/lib/styles/css/react-mde-all.css";
import {ICasaimages} from "interfaces";
import Casaimagesform from "components/casaimagesformCreate"

export const CasaimagesCreate: React.FC<IResourceComponentsProps> = () => {


    const {formProps, saveButtonProps} = useForm<ICasaimages>({
        action: "create",
        resource: "casaimages"
    });


    return (
        <>
            <Create saveButtonProps={saveButtonProps}>
                <Casaimagesform formProps={formProps}></Casaimagesform>
            </Create>
        </>
    );
};