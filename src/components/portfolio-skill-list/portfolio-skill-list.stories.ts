import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./portfolio-skill-list";
import "../portfolio-skill/portfolio-skill";
import "../portfolio-container/portfolio-container";

const meta: Meta = {
  title: "SkillList",
  component: "portfolio-skill-list",
};
export default meta;

type Story = StoryObj;

export const JavascriptSkill: Story = {
  render: () => html`<portfolio-skill-list></portfolio-skill-list>`,
};
