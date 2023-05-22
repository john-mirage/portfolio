import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./portfolio-header";
import "../portfolio-icon-link/portfolio-icon-link";
import "../portfolio-icon/portfolio-icon";
import "../portfolio-text/portfolio-text";

const meta: Meta = {
  title: "Header",
  component: "portfolio-header",
};
export default meta;

type Story = StoryObj;

export const Primary: Story = {
  render: () => html`<portfolio-header></portfolio-header>`,
};
