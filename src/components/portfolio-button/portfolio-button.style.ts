import { css } from "lit";

const styles = css`
  .button {
    position: relative;
    display: block;
    padding-bottom: 10px;
    text-decoration: none;
    color: var(--color-white);
    transition: color 150ms;
  }

  .button__line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-green);
  }

  @media screen and (hover: hover) {
    .button:hover {
      color: var(--color-green);
    }
  }
`;

export default styles;
