import { css } from "lit";

const styles = css`
  :host {
    display: block;
  }

  .text-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .title,
  .subtitle {
    max-width: 400px;
  }

  .title {
    color: var(--color-white);
  }

  .subtitle {
    color: var(--color-grey);
  }

  .input {
    display: block;
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid var(--color-white);
  }
`;

export default styles;
