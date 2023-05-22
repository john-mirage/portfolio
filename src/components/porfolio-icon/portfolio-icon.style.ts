import { css } from "lit";

const styles = css`
  :host {
    display: block;
  }

  svg {
    width: 1.25rem; /* 20px */
    height: 1.25rem; /* 20px */
  }

  @media screen and (min-width: 768px) {
    svg {
      width: 1.5rem; /* 24px */
      height: 1.5rem; /* 24px */
    }
  }
`;

export default styles;
