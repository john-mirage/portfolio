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

export const AsButton: Story = {
  render: () => html`
    <portfolio-button>
      <button>
        <portfolio-text variant="label-large">contact me</portfolio-text>
      </button>
    </portfolio-button>
  `,
};

export const AsLink: Story = {
  render: () => html`
    <portfolio-button>
      <a href="#">
        <portfolio-text variant="label-large">contact me</portfolio-text>
      </a>
    </portfolio-button>
  `,
};
