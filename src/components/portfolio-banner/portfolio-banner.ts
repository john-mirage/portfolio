import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./portfolio-banner.style";
import globalStyles from "../../styles/globals";

@customElement("portfolio-banner")
export class PorfolioBanner extends LitElement {
  static styles = [globalStyles, styles];

  render() {
    return html`
      <h1 class="title">
        <portfolio-text variant="title-small">adamkeyes</portfolio-text>
      </h1>
      <ul class="list">
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
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-banner": PorfolioBanner;
  }
}
