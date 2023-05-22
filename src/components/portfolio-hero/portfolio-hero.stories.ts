import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./portfolio-hero";
import "../portfolio-button/portfolio-button";
import "../portfolio-text/portfolio-text";
import "../portfolio-container/portfolio-container";

const meta: Meta = {
  title: "Hero",
  component: "portfolio-hero",
};
export default meta;

type Story = StoryObj;

export const Primary: Story = {
  render: () => html`<portfolio-hero></portfolio-hero>`,
};
