import { css } from "lit";

const styles = css`
  :host {
    display: block;
  }

  ul {
    margin: 0;
    padding: 40px 0 40px 0;
    border-top: 1px solid var(--color-white);
    border-bottom: 1px solid var(--color-white);
    display: grid;
    gap: 24px;
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
