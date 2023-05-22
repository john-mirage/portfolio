import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./portfolio-container.style";

@customElement("portfolio-container")
export class PorfolioContainer extends LitElement {
  static styles = styles;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-container": PorfolioContainer;
  }
}
