import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./portfolio-icon-link.style";
import globalStyles from "../../styles/globals";

@customElement("portfolio-icon-link")
export class PorfolioIconLink extends LitElement {
  static styles = [globalStyles, styles];

  @property({ type: String, reflect: true })
  icon: string;

  @property({ type: String, reflect: true })
  url: string;

  render() {
    return html`
      <a href="${this.url}">
        <portfolio-icon icon="${this.icon}"></portfolio-icon>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-icon-link": PorfolioIconLink;
  }
}
