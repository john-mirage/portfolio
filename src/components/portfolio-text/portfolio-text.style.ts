import { css } from "lit";

const styles = css`
  :host {
    font-family: "Space Grotesk", ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
  }

  :host([variant="title-large"]) {
    font-size: 40px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: -1.14px;
  }

  :host([variant="title-medium"]) {
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: -1px;
  }

  :host([variant="title-small"]) {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0;
  }

  :host([variant="body-large"]) {
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0;
  }

  :host([variant="label-large"]) {
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 2.29px;
    text-transform: uppercase;
  }
`;

export default styles;
