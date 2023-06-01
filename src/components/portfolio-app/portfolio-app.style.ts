import { css } from "lit";

const styles = css`
  :host {
    --color-black: hsl(0, 0%, 8%);
    --color-green: hsl(153, 71%, 59%);
    --color-dark-grey: hsl(0, 0%, 14%);
    --color-grey: hsl(0, 0%, 85%);
    --color-white: hsl(0, 0%, 100%);
    --color-html: #fdba74;
    --color-css: #93c5fd;
    --color-javascript: #fde047;
    --color-accessibility: #6ee7b7;
    --color-react: #5eead4;
    --color-sass: #f9a8d4;

    background-color: var(--color-black);
  }

  .header {
    margin-top: 20px;
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }

  .hero {
    margin-bottom: 80px;
    position: relative;
    z-index: 10;
  }

  .project-list {
    margin-top: 64px;
  }

  .footer {
    margin-top: 48px;
    margin-bottom: 48px;
  }

  @media screen and (min-width: 768px) {
    .header {
      margin-top: 30px;
      padding-left: 32px;
      padding-right: 32px;
    }
  }
`;

export default styles;
