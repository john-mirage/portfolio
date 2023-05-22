import { css } from "lit";

const styles = css`
  :host {
    display: inline-block;
    color: var(--color-white);
    transition: color 150ms;
  }

  :host(:hover) {
    color: var(--color-green);
  }

  a {
    display: block;
    position: relative;
    padding-bottom: 10px;
    text-decoration: none;
    color: inherit;
  }

  button {
    margin: 0;
    position: relative;
    padding: 0 0 10px 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  span {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-green);
  }
`;

export default styles;
