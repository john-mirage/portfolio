import { css } from "lit";

const styles = css`
  :host {
    background-image: url("pattern-rings.svg");
    background-repeat: no-repeat;
    background-position: bottom 87px left -350px;
  }

  .text-section {
    margin-bottom: 50px;
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

  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-bottom: 87px;
    border-bottom: 1px solid var(--color-white);
  }

  .inputs {
    margin-bottom: 32px;
    display: grid;
    gap: 32px;
    width: 100%;
  }

  .input {
    display: block;
    width: 100%;
    padding: 0 24px 16px 24px;
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid var(--color-white);
    font-family: inherit;
    text-transform: uppercase;
    color: var(--color-white);
  }

  .button {
    margin-left: auto;
  }
`;

export default styles;
