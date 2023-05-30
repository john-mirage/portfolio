import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./portfolio-container.style";
import globalStyles from "../../styles/globals";

@customElement("portfolio-container")
export class PorfolioContainer extends LitElement {
  static styles = [globalStyles, styles];

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-container": PorfolioContainer;
  }
}
