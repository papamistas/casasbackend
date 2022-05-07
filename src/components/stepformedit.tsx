import React from "react";
import { Steps, Button, message, Divider } from "@pankod/refine-antd";
import "@pankod/refine-antd/dist/styles.min.css";
import "../styles/index.css"; //todo styled component

import { CasaEdit } from "./casaformEdit";
import { CasageodataEdit } from "components/casageodataEdit";
import { CasaimagesCreate } from "./casaimagesCreate";
import { CasaattributesCreate } from "./casasatributtesCreate";
import { CasaamenitiesEdit } from "./casaamenitiesEdit";

const { Step } = Steps;

const steps = [
  {
    title: "Description",
    content: (
      <>
        <Divider />
        <CasaEdit />
      </>
    ),
  },
  {
    title: "Amenities",
    content: (
      <>
        <Divider />
        <CasaamenitiesEdit />
      </>
    ),
  },
  {
    title: "Geo data",
    content: (
      <>
        <Divider />
        <CasageodataEdit />
      </>
    ),
  },
  {
    title: "Attributes",
    content: (
      <>
        <Divider />
        <CasaattributesCreate />
      </>
    ),
  },
  {
    title: "Images",
    content: (
      <>
        <Divider />
        <CasaimagesCreate />
      </>
    ),
  },
];

const StepFormCasaEdit = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onChange = (current: any) => {
    console.log("onChange:", current);
    setCurrent(current);
  };

  return (
    <>
      <Steps current={current} percent={100} onChange={onChange}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} /*icon={item.icon} */ />
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
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default StepFormCasaEdit;
