import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./portfolio-app.style";

@customElement("portfolio-app")
export class PorfolioApp extends LitElement {
  static styles = styles;

  render() {
    return html`
      <portfolio-header class="header"></portfolio-header>
      <portfolio-hero class="hero"></portfolio-hero>
      <portfolio-skill-list class="skill-list"></portfolio-skill-list>
      <portfolio-project-list class="project-list"></portfolio-project-list>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-app": PorfolioApp;
  }
}
