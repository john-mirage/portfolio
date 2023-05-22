import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./portfolio-container";

const meta: Meta = {
  title: "Container",
  component: "portfolio-container",
};
export default meta;

type Story = StoryObj;

export const Primary: Story = {
  render: () => html`<portfolio-container></portfolio-container>`,
};
