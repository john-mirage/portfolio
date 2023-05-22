import { css } from "lit";

const styles = css`
  :host {
    padding-top: 20px;
  }

  portfolio-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 20px;
    color: var(--color-white);
  }

  ul {
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    padding: 0;
    list-style: none;
  }

  @media screen and (min-width: 768px) {
    portfolio-container {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export default styles;
