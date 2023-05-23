import { css } from "lit";

const styles = css`
  :host {
    display: block;
  }

  .image-section {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 174px;
  }

  .image {
    width: 100%;
    max-width: 100%;
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

  @media screen and (min-width: 768px) {
    .container {
      display: flex;
      flex-direction: row;
      align-items: stretch;
    }

    .image-section {
      position: relative;
      z-index: 10;
      order: 2;
      flex: 0 0 322px;
      max-width: 322px;
    }

    .text-section {
      position: relative;
      z-index: 20;
      order: 1;
      flex: 1;
      text-align: left;
      justify-content: flex-end;
      align-items: flex-start;
    }

    .title {
      margin-right: -32px;
      margin-bottom: 60px;
      max-width: none;
    }

    .subtitle {
      margin-bottom: 32px;
      max-width: none;
    }
  }
`;

export default styles;
