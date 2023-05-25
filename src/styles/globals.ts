import { css } from "lit";

const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    display: block;
  }
`;

export default globalStyles;
