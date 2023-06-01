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
    text-transform: uppercase;
  }

  .text--grey {
    color: var(--color-grey);
  }

  .text--html {
    color: var(--color-html);
  }

  .text--css {
    color: var(--color-css);
  }

  .text--javascript {
    color: var(--color-javascript);
  }

  .text--accessibility {
    color: var(--color-accessibility);
  }

  .text--react {
    color: var(--color-react);
  }

  .text--sass {
    color: var(--color-sass);
  }

  @media screen and (min-width: 768px) {
    :host {
      text-align: left;
      align-items: flex-start;
    }
  }
`;

export default styles;
