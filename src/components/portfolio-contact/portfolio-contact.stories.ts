import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./portfolio-contact";
import "../portfolio-container/portfolio-container";
import "../portfolio-text/portfolio-text";
import "../portfolio-button/portfolio-button";

const meta: Meta = {
  title: "Contact",
  component: "portfolio-contact",
};
export default meta;

type Story = StoryObj;

export const Primary: Story = {
  render: () => html`
    <portfolio-container>
      <portfolio-contact></portfolio-contact>
    </portfolio-container>
  `,
};
