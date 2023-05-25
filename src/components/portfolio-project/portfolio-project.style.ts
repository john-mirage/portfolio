import { css } from "lit";

const styles = css`
  :host {
    position: relative;
  }

  .image-section {
    margin-bottom: 20px;
    position: relative;
    z-index: 10;
    display: block;
    width: 100%;
    aspect-ratio: 16/9;
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    max-width: 100%;
    object-fit: cover;
  }

  .name {
    margin-top: 0;
    margin-bottom: 8px;
    text-transform: uppercase;
    color: var(--color-white);
  }

  .tag-list {
    margin: 0 0 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 18px;
    padding: 0;
    list-style: none;
    color: var(--color-white);
    text-transform: uppercase;
  }

  .button-section {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
  }

  @media screen and (min-width: 1110px) {
    .button-section {
      position: absolute;
      z-index: 100;
      top: 0;
      left: 0;
      width: 100%;
      aspect-ratio: 16/9;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 48px;
      background-color: hsla(0, 0%, 0%, 75%);
      visibility: hidden;
      opacity: 0;
      transition-property: visibility, opacity;
      transition-duration: 150ms;
    }

    :host(:hover) .button-section {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export default styles;
