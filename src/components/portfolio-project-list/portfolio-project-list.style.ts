import { css } from "lit";

const styles = css`
  .row {
    margin-bottom: 40px;
  }

  .title {
    margin-top: 0;
    margin-bottom: 16px;
    color: var(--color-white);
  }

  .list {
    margin: 0;
    display: grid;
    gap: 40px;
    padding: 0;
  }

  @media screen and (min-width: 375px) {
    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .title {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 768px) {
    .list {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
`;

export default styles;
