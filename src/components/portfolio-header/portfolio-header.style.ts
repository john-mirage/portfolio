import { css } from "lit";

const styles = css`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
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
    :host {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export default styles;
