import { css } from "lit";

const styles = css`
  :host {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 87px;
    border-bottom: 1px solid var(--color-white);
  }

  .text-section {
    margin-bottom: 50px;
    text-align: center;
    max-width: 445px;
  }

  .title {
    margin-top: 0;
    margin-bottom: 20px;
    color: var(--color-white);
  }

  .subtitle {
    margin-top: 0;
    margin-bottom: 0;
    color: var(--color-grey);
  }

  .form-section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    max-width: 445px;
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
    padding: 8px 24px 16px 24px;
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid var(--color-white);
    font-family: inherit;
    text-transform: uppercase;
    color: var(--color-white);
  }

  .input:focus-visible {
    outline: none;
    border-color: var(--color-green);
  }

  .button {
    margin-left: auto;
  }

  .rings {
    position: absolute;
    z-index: auto;
    bottom: 97px;
    left: -364px;
  }

  @media screen and (min-width: 768px) {
    .rings {
      bottom: 27px;
      left: -380px;
    }
  }

  @media screen and (min-width: 1174px) {
    :host {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }

    .text-section {
      text-align: left;
    }

    .rings {
      bottom: 47px;
      left: -380px;
    }
  }
`;

export default styles;
