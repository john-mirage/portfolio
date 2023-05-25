import { css } from "lit";

const styles = css`
  :host {
    background-image: url("pattern-rings.svg");
    background-position: top 150px left -350px;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  .image-section {
    position: relative;
  }

  .circle {
    position: absolute;
    right: -80px;
    bottom: 0;
  }

  .picture {
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

    .picture {
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
