import { css } from "lit";

const styles = css`
  :host {
    width: 100%;
    overflow: hidden;
  }

  div {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
  }

  @media screen and (min-width: 768px) {
    div {
      max-width: 768px;
      padding-left: 32px;
      padding-right: 32px;
    }
  }

  @media screen and (min-width: 1174px) {
    div {
      max-width: 1174px;
    }
  }
`;

export default styles;
