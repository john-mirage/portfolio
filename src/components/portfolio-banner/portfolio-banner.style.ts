import { css } from "lit";

const styles = css`
  :host {
    padding-top: 20px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    margin-top: 0;
    margin-bottom: 20px;
    color: var(--color-white);
  }

  .list {
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    padding: 0;
    list-style: none;
  }

  @media screen and (min-width: 768px) {
    :host {
      padding-top: 30px;
    }

    .container {
      flex-direction: row;
      justify-content: space-between;
    }

    .title {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 1110px) {
    :host {
      padding-top: 40px;
    }
  }
`;

export default styles;
