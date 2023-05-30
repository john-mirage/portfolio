import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./portfolio-app.style";
import globalStyles from "../../styles/globals";

@customElement("portfolio-app")
export class PorfolioApp extends LitElement {
  static styles = [globalStyles, styles];

  render() {
    return html`
      <portfolio-container class="body-section">
        <portfolio-banner class="header"></portfolio-banner>
        <portfolio-hero class="hero"></portfolio-hero>
        <portfolio-skill-list class="skill-list"></portfolio-skill-list>
        <portfolio-project-list class="project-list"></portfolio-project-list>
      </portfolio-container>
      <portfolio-container class="footer-section">
        <portfolio-contact class="contact"></portfolio-contact>
        <portfolio-banner class="footer"></portfolio-banner>
      </portfolio-container>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-app": PorfolioApp;
  }
}
