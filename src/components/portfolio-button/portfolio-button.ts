import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./portfolio-button.style";
import globalStyles from "../../styles/globals";

@customElement("portfolio-button")
export class PorfolioButton extends LitElement {
  static styles = [globalStyles, styles];

  @property({ type: String, reflect: true })
  label: string;

  @property({ type: String, reflect: true })
  href: string;

  render() {
    return html`
      <a class="button" href="${this.href}">
        <portfolio-text variant="label-large">${this.label}</portfolio-text>
        <span class="button__line"></span>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-button": PorfolioButton;
  }
}
