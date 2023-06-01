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
        <portfolio-text variant="title-small">johnmirage</portfolio-text>
      </h1>
      <ul class="list">
        <li>
          <portfolio-icon-link
            icon="github"
            url="https://github.com/john-mirage"
            label="Go to my Github page"
          ></portfolio-icon-link>
        </li>
        <li>
          <portfolio-icon-link
            icon="frontend-mentor"
            url="https://www.frontendmentor.io/profile/john-mirage"
            label="Go to my Frontend Mentor page"
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
