import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./portfolio-project";
import image from "../../images/thumbnail-project-1-small.webp";
import "../portfolio-button/portfolio-button";
import "../portfolio-text/portfolio-text";

const meta: Meta = {
  title: "Project",
  component: "portfolio-project",
};
export default meta;

type Story = StoryObj;

export const Primary: Story = {
  render: () =>
    html`<portfolio-project
      name="age calculator app"
      tags="html, css"
      imageUrl="${image}"
      projectUrl="https://www.frontendmentor.io/home"
      codeUrl="https://www.frontendmentor.io/home"
    ></portfolio-project>`,
};
