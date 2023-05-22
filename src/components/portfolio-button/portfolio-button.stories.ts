import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./portfolio-button";
import "../portfolio-text/portfolio-text";

const meta: Meta = {
  title: "Button",
  component: "portfolio-button",
};
export default meta;

type Story = StoryObj;

export const Primary: Story = {
  render: () => html`
    <portfolio-button>
      <portfolio-text variant="label-large">contact me</portfolio-text>
    </portfolio-button>
  `,
};
