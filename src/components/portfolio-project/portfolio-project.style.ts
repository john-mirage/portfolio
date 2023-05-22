import { css } from "lit";

const styles = css`
  img {
    margin-bottom: 20px;
    display: block;
    width: 100%;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 8px;
    text-transform: uppercase;
    color: var(--color-white);
  }

  ul {
    margin: 0 0 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 18px;
    padding: 0;
    list-style: none;
    color: var(--color-white);
    text-transform: uppercase;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
  }
`;

export default styles;
