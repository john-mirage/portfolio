import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./portfolio-skill";

const meta: Meta = {
  title: "Skill",
  component: "portfolio-skill",
};
export default meta;

type Story = StoryObj;

export const JavascriptSkill: Story = {
  render: () =>
    html`<portfolio-skill
      topic="Javascript"
      skill="4 Years Experience"
    ></portfolio-skill>`,
};
