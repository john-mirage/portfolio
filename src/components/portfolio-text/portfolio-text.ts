import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./portfolio-text.style";
import globalStyles from "../../styles/globals";

@customElement("portfolio-text")
export class PorfolioText extends LitElement {
  static styles = [globalStyles, styles];

  @property({ type: String, reflect: true })
  variant: string;

  render() {
    return html`<slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-text": PorfolioText;
  }
}
