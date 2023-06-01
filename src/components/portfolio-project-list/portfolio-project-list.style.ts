import { css } from "lit";

const styles = css`
  :host {
    padding-bottom: 48px;
    border-bottom: 1px solid var(--color-white);
  }

  .title {
    margin-top: 0;
    margin-bottom: 40px;
    color: var(--color-white);
  }

  .list {
    margin: 0;
    display: grid;
    gap: 40px;
    padding: 0;
    list-style: none;
  }

  @media screen and (min-width: 768px) {
    .list {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
`;

export default styles;
