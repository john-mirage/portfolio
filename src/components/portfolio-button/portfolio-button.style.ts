import { css } from "lit";

const styles = css`
  :host {
    position: relative;
    display: inline-block;
    color: var(--color-white);
    transition: color 150ms;
  }

  :host(:hover) {
    color: var(--color-green);
  }

  ::slotted(a) {
    display: block;
    padding-bottom: 10px;
    text-decoration: none;
    color: inherit;
  }

  ::slotted(button) {
    margin: 0;
    display: block;
    padding: 0 0 10px 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: inherit;
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
