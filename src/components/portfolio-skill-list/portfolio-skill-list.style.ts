import { css } from "lit";

const styles = css`
  :host {
    display: block;
  }

  ul {
    display: grid;
    gap: 24px;
    padding-top: 40px;
    padding-bottom: 40px;
    border-top: 1px solid var(--color-white);
    border-bottom: 1px solid var(--color-white);
    list-style: none;
  }

  @media screen and (min-width: 768px) {
    ul {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 52px 8px;
      border-bottom: none;
    }
  }

  @media screen and (min-width: 1200px) {
    ul {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 58px 30px;
    }
  }
`;

export default styles;
