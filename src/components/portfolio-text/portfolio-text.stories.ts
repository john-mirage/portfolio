import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./portfolio-text";

const meta: Meta = {
  title: "Text",
  component: "portfolio-text",
};
export default meta;

type Story = StoryObj;

export const TitleLarge: Story = {
  render: () =>
    html`<portfolio-text variant="title-large">Title large</portfolio-text>`,
};

export const TitleMedium: Story = {
  render: () =>
    html`<portfolio-text variant="title-medium">Title medium</portfolio-text>`,
};

export const TitleSmall: Story = {
  render: () =>
    html`<portfolio-text variant="title-small">Title small</portfolio-text>`,
};

export const BodyLarge: Story = {
  render: () =>
    html`<portfolio-text variant="body-large"
      >A nice small little text to show how it is properly done.</portfolio-text
    >`,
};

export const LabelLarge: Story = {
  render: () =>
    html`<portfolio-text variant="label-large">contact me</portfolio-text>`,
};
