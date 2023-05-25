import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./portfolio-app";
import "../portfolio-banner/portfolio-banner";
import "../portfolio-hero/portfolio-hero";
import "../portfolio-skill-list/portfolio-skill-list";
import "../portfolio-project-list/portfolio-project-list";
import "../portfolio-button/portfolio-button";
import "../portfolio-container/portfolio-container";
import "../portfolio-icon/portfolio-icon";
import "../portfolio-icon-link/portfolio-icon-link";
import "../portfolio-project/portfolio-project";
import "../portfolio-skill/portfolio-skill";
import "../portfolio-text/portfolio-text";
import "../portfolio-contact/portfolio-contact";

const meta: Meta = {
  title: "App",
  component: "portfolio-app",
};
export default meta;

type Story = StoryObj;

export const Primary: Story = {
  render: () => html` <portfolio-app></portfolio-app> `,
};
