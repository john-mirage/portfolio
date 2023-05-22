import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./portfolio-icon-link";
import "../portfolio-icon/portfolio-icon";

const meta: Meta = {
  title: "IconLink",
  component: "portfolio-icon-link",
};
export default meta;

type Story = StoryObj;

export const Primary: Story = {
  render: () =>
    html`<portfolio-icon-link
      url="https://github.com/"
      icon="github"
    ></portfolio-icon-link>`,
};
