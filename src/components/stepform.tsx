import React from "react";
import {Steps, Button, message} from "@pankod/refine-antd";
import "@pankod/refine-antd/dist/styles.min.css";
import "../styles/index.css" //todo styled component
import {Icons} from "./icons";
import CasaForm from "./casaform"
import {CasaformCreate} from "./casaformCreate";
import {CasageodataCreate} from "components/casaeodataCreate"

const {Step} = Steps;

const steps = [
    {
        title: 'Description',
        content: <CasaformCreate/>,
    },
    {
        title: 'Geo data',
        content: <CasageodataCreate/>,
    },
    {
        title: 'Attribute',
        content: <CasaformCreate/>,
    },
    {
        title: 'Images',
        content: <CasaformCreate/>,
    },
];

const StepFormCasa = () => {
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title}/>
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{margin: '0 8px'}} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </>
    );
};

export default StepFormCasa;

