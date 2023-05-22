import { css } from "lit";

const styles = css`
  :host {
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    :host {
      max-width: 768px;
    }
  }

  @media screen and (min-width: 1110px) {
    :host {
      max-width: 1110px;
    }
  }
`;

export default styles;
