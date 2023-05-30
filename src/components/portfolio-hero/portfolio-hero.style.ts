import { css } from "lit";

const styles = css`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image-section {
    position: relative;
    z-index: 20;
    display: block;
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
    max-width: 445px;
  }

  .title {
    color: var(--color-white);
  }

  .subtitle {
    color: var(--color-grey);
  }

  .name {
    position: relative;
  }

  .name {
    position: relative;
    z-index: 20;
    display: inline-block;
  }

  .name__line {
    position: absolute;
    z-index: 10;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: var(--color-green);
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
      flex-direction: row;
      align-items: flex-end;
    }

    .image-section {
      margin-left: 0;
      margin-right: -32px;
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
      max-width: none;
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

    .name__line {
      bottom: -6px;
      height: 6px;
    }

    .pattern--circle {
      top: 471px;
    }

    .pattern--rings {
      top: 86px;
    }
  }

  @media screen and (min-width: 1174px) {
    :host {
      align-items: center;
    }

    .image-section {
      margin-right: 0;
      flex: 0 0 445px;
      width: 445px;
      height: 720px;
    }

    .text-section {
      margin-right: -41px;
    }

    .subtitle {
      max-width: 445px;
    }

    .image {
      height: 100%;
      object-fit: cover;
    }

    .pattern--circle {
      top: 521px;
      right: 381px;
    }

    .pattern--rings {
      top: 133px;
    }
  }
`;

export default styles;
