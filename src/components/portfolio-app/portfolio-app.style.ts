import { css } from "lit";

const styles = css`
  :host {
    display: block;
    background-color: var(--color-black);
  }

  .header {
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
  }

  .hero {
    margin-bottom: 80px;
    position: relative;
    z-index: 10;
  }

  .skill-list {
    margin-bottom: 80px;
  }
`;

export default styles;
