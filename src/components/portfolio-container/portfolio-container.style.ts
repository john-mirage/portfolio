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
    padding-left: 24px;
    padding-right: 24px;
  }

  @media screen and (min-width: 768px) {
    div {
      max-width: 768px;
    }
  }

  @media screen and (min-width: 1174px) {
    div {
      max-width: 1174px;
    }
  }
`;

export default styles;
