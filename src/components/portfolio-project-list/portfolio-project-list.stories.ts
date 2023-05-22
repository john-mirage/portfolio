import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./portfolio-project-list";
import "../portfolio-button/portfolio-button";
import "../portfolio-text/portfolio-text";
import "../portfolio-project/portfolio-project";
import "../portfolio-container/portfolio-container";

const meta: Meta = {
  title: "ProjectList",
  component: "portfolio-project-list",
};
export default meta;

type Story = StoryObj;

export const Primary: Story = {
  render: () => html`<portfolio-project-list></portfolio-project-list>`,
};
