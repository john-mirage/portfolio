import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./portfolio-hero.style";
import mobileImage from "../../images/image-profile-mobile.webp";
import tabledImage from "../../images/image-profile-tablet.webp";

@customElement("portfolio-hero")
export class PorfolioHero extends LitElement {
  static styles = styles;

  render() {
    return html`
      <portfolio-container>
        <picture>
          <source srcset="${tabledImage}" media="(min-width: 768px)" />
          <img src="${mobileImage}" alt="" />
        </picture>
        <div>
          <h2>
            <portfolio-text variant="title-large"
              >Nice to meet you! I'm Adam Keyes.</portfolio-text
            >
          </h2>
          <p>
            <portfolio-text variant="body-large"
              >Based in the UK, I’m a front-end developer passionate about
              building accessible web apps that users love.</portfolio-text
            >
          </p>
          <portfolio-button>
            <portfolio-text variant="label-large">contact me</portfolio-text>
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
