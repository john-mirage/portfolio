import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./portfolio-button.style";

@customElement("portfolio-button")
export class PorfolioButton extends LitElement {
  static styles = styles;

  @property({ type: Boolean, reflect: true })
  isLink: boolean = true;

  @property({ type: String, reflect: true })
  url: string;

  render() {
    return this.isLink
      ? html`
          <a href="${this.url}">
            <slot></slot>
            <span></span>
          </a>
        `
      : html`
          <button>
            <slot></slot>
            <span></span>
          </button>
        `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-button": PorfolioButton;
  }
}
