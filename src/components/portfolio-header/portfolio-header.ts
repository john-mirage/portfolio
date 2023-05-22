import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./portfolio-header.style";

@customElement("portfolio-header")
export class PorfolioHeader extends LitElement {
  static styles = styles;

  render() {
    return html`
      <portfolio-container>
        <h1>
          <portfolio-text variant="title-medium">adamkeyes</portfolio-text>
        </h1>
        <ul>
          <li>
            <portfolio-icon-link
              icon="github"
              url="https://github.com/"
            ></portfolio-icon-link>
          </li>
          <li>
            <portfolio-icon-link
              icon="frontend-mentor"
              url="https://github.com/"
            ></portfolio-icon-link>
          </li>
          <li>
            <portfolio-icon-link
              icon="linkedin"
              url="https://github.com/"
            ></portfolio-icon-link>
          </li>
          <li>
            <portfolio-icon-link
              icon="twitter"
              url="https://github.com/"
            ></portfolio-icon-link>
          </li>
        </ul>
      </portfolio-container>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-header": PorfolioHeader;
  }
}
