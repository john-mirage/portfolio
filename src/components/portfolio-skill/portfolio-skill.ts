import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./portfolio-skill.style";
import globalStyles from "../../styles/globals";

@customElement("portfolio-skill")
export class PorfolioSkill extends LitElement {
  static styles = [globalStyles, styles];

  @property({ type: String, reflect: true })
  topic: string;

  @property({ type: String, reflect: true })
  skill: string;

  render() {
    return html`
      <h3 class="text text--white">
        <portfolio-text variant="title-medium">${this.topic}</portfolio-text>
      </h3>
      <p class="text text--grey">
        <portfolio-text variant="body-large">${this.skill}</portfolio-text>
      </p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-skill": PorfolioSkill;
  }
}
