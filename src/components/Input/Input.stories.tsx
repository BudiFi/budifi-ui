import { select, text, withKnobs } from "@storybook/addon-knobs";

import { CustomInput } from "./index";

export default {
    title: "Input",
    component: CustomInput,
    decorators: [withKnobs],
};

export const Basic = () => (
    <CustomInput type="primary" placeholder="john@mail.com" />
);

export const DynamicVariables = () => {
    const type = select(
        "type",
        ["default", "primary", "ghost", "dashed", "link", "text"],
        "default",
    );
    const size = select("size", ["small", "middle", "large"], "middle");

    return <CustomInput type={type} size={size} />;
};
