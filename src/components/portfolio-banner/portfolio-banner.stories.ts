import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./portfolio-banner";
import "../portfolio-icon-link/portfolio-icon-link";
import "../portfolio-icon/portfolio-icon";
import "../portfolio-text/portfolio-text";
import "../portfolio-container/portfolio-container";

const meta: Meta = {
  title: "Banner",
  component: "portfolio-banner",
};
export default meta;

type Story = StoryObj;

export const Primary: Story = {
  render: () => html`<portfolio-banner></portfolio-banner>`,
};
