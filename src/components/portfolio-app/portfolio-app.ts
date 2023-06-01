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
        <header class="header">
          <portfolio-banner></portfolio-banner>
        </header>
        <main>
          <portfolio-hero class="hero"></portfolio-hero>
          <portfolio-skill-list class="skill-list"></portfolio-skill-list>
          <portfolio-project-list class="project-list"></portfolio-project-list>
        </main>
        <footer class="footer">
          <portfolio-banner></portfolio-banner>
        </footer>
      </portfolio-container>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-app": PorfolioApp;
  }
}
