import { css } from "lit";

const styles = css`
  a {
    text-decoration: none;
    color: var(--color-white);
    transition: color 150ms;
  }

  a:hover {
    color: var(--color-green);
  }
`;

export default styles;
