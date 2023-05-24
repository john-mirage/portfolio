import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./portfolio-button.style";

@customElement("portfolio-button")
export class PorfolioButton extends LitElement {
  static styles = styles;

  render() {
    return html`
      <slot></slot>
      <span></span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-button": PorfolioButton;
  }
}
