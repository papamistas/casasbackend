import {Steps} from "@pankod/refine-antd";
import "@pankod/refine-antd/dist/styles.min.css";

const {Step} = Steps;

export default () => (
    <Steps current={1}>
        <Step title="Start" description="This is a house main data."/>
        <Step title="In Progress" subTitle="Left 00:00:08" description="House Geodata ."/>
        <Step title="Waiting" description="Images of the house."/>
        <Step title="Finished" description="Here select amenities"/>
    </Steps>
);