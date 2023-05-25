import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./portfolio-hero.style";
import mobileImage from "../../images/image-profile-mobile.webp";
import tabledImage from "../../images/image-profile-tablet.webp";
import globalStyles from "../../styles/globals";

@customElement("portfolio-hero")
export class PorfolioHero extends LitElement {
  static styles = [globalStyles, styles];

  render() {
    return html`
      <div class="image-section">
        <picture class="picture">
          <source srcset="${tabledImage}" media="(min-width: 768px)" />
          <img class="image" src="${mobileImage}" alt="" />
        </picture>
        <img class="circle" src="pattern-circle.svg" aria-hidden="true" />
      </div>
      <portfolio-container>
        <div class="text-section">
          <h2 class="title">
            <portfolio-text variant="title-large"
              >Nice to meet you! I'm Adam Keyes.</portfolio-text
            >
          </h2>
          <p class="subtitle">
            <portfolio-text variant="body-large"
              >Based in the UK, I’m a front-end developer passionate about
              building accessible web apps that users love.</portfolio-text
            >
          </p>
          <portfolio-button class="button">
            <a href="#">
              <portfolio-text variant="label-large">contact me</portfolio-text>
            </a>
          </portfolio-button>
        </div>
      </portfolio-container>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-hero": PorfolioHero;
  }
}
