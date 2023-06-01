import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./portfolio-hero.style";
import globalStyles from "../../styles/globals";

@customElement("portfolio-hero")
export class PorfolioHero extends LitElement {
  static styles = [globalStyles, styles];

  render() {
    return html`
      <div class="text-section">
        <h1 class="title">
          <portfolio-text variant="title-large"
            >Nice to meet you! I'm
            <span class="name"
              ><span class="name__value">John Mirage</span
              ><span class="name__line"></span></span
            >.</portfolio-text
          >
        </h1>
        <p class="subtitle">
          <portfolio-text variant="body-large"
            >Based in France, I’m a front-end developer passionate about
            building accessible web apps that users love.</portfolio-text
          >
        </p>
      </div>
      <img
        class="rings"
        src="pattern-rings.svg"
        draggable="false"
        aria-hidden="true"
      />
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-hero": PorfolioHero;
  }
}
