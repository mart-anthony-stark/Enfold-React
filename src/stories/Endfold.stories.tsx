import React from "react";
import { Story, Meta } from "@storybook/react";

import Enfold from "../components/Enfold";
import { EnfoldProps } from "../components/Enfold.types";

import './enfold.css'

export default {
  title: "Mart/Enfold",
  component: Enfold,
  argTypes: {},
} as Meta<typeof Enfold>;

const Template: Story<EnfoldProps> = (args) => <Enfold {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <div>asd</div>,
  name: ""
};
