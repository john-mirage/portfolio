import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./portfolio-icon";

const meta: Meta = {
  title: "Icon",
  component: "portfolio-icon",
};
export default meta;

type Story = StoryObj;

export const Empty: Story = {
  render: () => html`<portfolio-icon></portfolio-icon>`,
};

export const Github: Story = {
  render: () => html`<portfolio-icon icon="github"></portfolio-icon>`,
};

export const FrontendMentor: Story = {
  render: () => html`<portfolio-icon icon="frontend-mentor"></portfolio-icon>`,
};

export const LinkedIn: Story = {
  render: () => html`<portfolio-icon icon="linkedin"></portfolio-icon>`,
};

export const Twitter: Story = {
  render: () => html`<portfolio-icon icon="twitter"></portfolio-icon>`,
};
