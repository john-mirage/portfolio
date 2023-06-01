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
  experience: string;

  render() {
    return html`
      <h3 class="text text--${this.topic}">
        <portfolio-text variant="title-medium">${this.topic}</portfolio-text>
      </h3>
      <p class="text text--grey">
        <portfolio-text variant="body-large"
          >${this.experience} Year${this.experience === "1" ? "" : "s"}
          Experience</portfolio-text
        >
      </p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-skill": PorfolioSkill;
  }
}
