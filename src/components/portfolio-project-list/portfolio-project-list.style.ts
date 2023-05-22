import { css } from "lit";

const styles = css`
  div {
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 0;
    color: var(--color-white);
  }

  ul {
    margin: 0;
    display: grid;
    gap: 40px;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    ul {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
`;

export default styles;
