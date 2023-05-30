import { css } from "lit";

const styles = css`
  :host {
    --color-black: hsl(0, 0%, 8%);
    --color-green: hsl(153, 71%, 59%);
    --color-dark-grey: hsl(0, 0%, 14%);
    --color-grey: hsl(0, 0%, 85%);
    --color-white: hsl(0, 0%, 100%);

    background-color: var(--color-black);
  }

  .header {
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

  .skill-list {
    margin-bottom: 80px;
  }

  .project-list {
    margin-bottom: 80px;
  }

  .contact {
    margin-bottom: 20px;
  }

  .footer-section {
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: var(--color-dark-grey);
  }
`;

export default styles;
