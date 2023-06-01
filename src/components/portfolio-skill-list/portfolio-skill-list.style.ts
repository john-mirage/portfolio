import { css } from "lit";

const styles = css`
  .title {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .list {
    margin: 0;
    padding: 40px 0 40px 0;
    border-top: 1px solid var(--color-white);
    border-bottom: 1px solid var(--color-white);
    display: grid;
    gap: 24px;
    list-style: none;
  }

  @media screen and (min-width: 768px) {
    .list {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 52px 8px;
      border-bottom: none;
    }
  }

  @media screen and (min-width: 1200px) {
    .list {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 58px 30px;
    }
  }
`;

export default styles;
