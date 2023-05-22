import { css } from "lit";

const styles = css`
  :host {
    display: block;
  }

  picture {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 174px;
  }

  img {
    width: 100%;
    max-width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h2 {
    color: var(--color-white);
  }

  p {
    color: var(--color-grey);
  }

  @media screen and (min-width: 768px) {
    portfolio-container {
      display: flex;
      flex-direction: row;
      align-items: stretch;
    }

    picture {
      position: relative;
      z-index: 10;
      order: 2;
      flex: 0 0 322px;
      max-width: 322px;
    }

    div {
      position: relative;
      z-index: 20;
      order: 1;
      flex: 1;
      text-align: left;
      justify-content: flex-end;
      align-items: flex-start;
    }

    h2 {
      margin-right: -32px;
      margin-bottom: 60px;
    }

    p {
      margin-bottom: 32px;
    }
  }
`;

export default styles;
