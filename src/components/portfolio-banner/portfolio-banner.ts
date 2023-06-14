import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./portfolio-banner.style";
import globalStyles from "../../styles/globals";

@customElement("portfolio-banner")
export class PorfolioBanner extends LitElement {
  static styles = [globalStyles, styles];

  render() {
    return html`
      <p class="title">
        <portfolio-text variant="title-small">antonipisaneschi</portfolio-text>
      </p>
      <nav class="list">
        <portfolio-icon-link
          icon="github"
          url="https://github.com/john-mirage"
          label="Go to my Github page"
        ></portfolio-icon-link>
        <portfolio-icon-link
          icon="frontend-mentor"
          url="https://www.frontendmentor.io/profile/john-mirage"
          label="Go to my Frontend Mentor page"
        ></portfolio-icon-link>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-banner": PorfolioBanner;
  }
}
