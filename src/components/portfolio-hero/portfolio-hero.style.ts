import { css } from "lit";

const styles = css`
  .image-section {
    position: relative;
    z-index: 20;
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

  .pattern {
    position: absolute;
  }

  .pattern--circle {
    z-index: 100;
    right: -80px;
    top: 254px;
  }

  .pattern--rings {
    z-index: 10;
    top: 150px;
    left: -350px;
  }

  @media screen and (min-width: 768px) {
    :host {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
    }

    .image-section {
      margin-right: -16px;
      order: 2;
      flex: 0 0 322px;
      width: 322px;
      max-width: none;
    }

    .text-section {
      position: relative;
      z-index: 30;
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

    .pattern--circle {
      top: 471px;
    }

    .pattern--rings {
      top: 86px;
    }
  }
`;

export default styles;
