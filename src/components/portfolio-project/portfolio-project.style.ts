import { css } from "lit";

const styles = css`
  :host {
    position: relative;
  }

  .image {
    margin-bottom: 20px;
    position: relative;
    z-index: 10;
    display: block;
    width: 100%;
    max-width: 100%;
    aspect-ratio: 4/3;
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

  .tag-html {
    color: var(--color-html);
  }

  .tag-css {
    color: var(--color-css);
  }

  .tag-javascript {
    color: var(--color-javascript);
  }

  .button-section {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
  }

  @media screen and (min-width: 1174px) {
    .button-section {
      position: absolute;
      z-index: 100;
      top: 0;
      left: 0;
      width: 100%;
      aspect-ratio: 4/3;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 24px;
      background-color: hsla(0, 0%, 0%, 75%);
      opacity: 0;
      transition-property: opacity;
      transition-duration: 150ms;
    }

    :host(:hover) .button-section {
      opacity: 1;
    }
  }
`;

export default styles;
