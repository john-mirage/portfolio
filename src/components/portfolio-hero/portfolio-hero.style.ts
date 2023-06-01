import { css } from "lit";

const styles = css`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 128px;
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

  .rings {
    position: absolute;
    z-index: 10;
    top: 128px;
    right: 50%;
    transform: translateX(50%);
  }

  @media screen and (min-width: 768px) {
    :host {
      flex-direction: row;
      align-items: flex-end;
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
      margin-bottom: 60px;
    }

    .subtitle {
      max-width: 445px;
    }

    .name__line {
      bottom: -6px;
      height: 6px;
    }

    .rings {
      top: 292px;
      right: -324px;
      transform: none;
    }
  }

  @media screen and (min-width: 1174px) {
    :host {
      align-items: center;
    }

    .rings {
      top: 364px;
      right: 0;
    }
  }
`;

export default styles;
