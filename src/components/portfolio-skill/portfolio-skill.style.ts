import { css } from "lit";

const styles = css`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .text {
    margin-top: 0;
    margin-bottom: 0;
  }

  .text--white {
    color: var(--color-white);
  }

  .text--grey {
    color: var(--color-grey);
  }

  @media screen and (min-width: 768px) {
    :host {
      text-align: left;
      align-items: flex-start;
    }
  }
`;

export default styles;
