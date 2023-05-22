import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./portfolio-project.style";

@customElement("portfolio-project")
export class PorfolioProject extends LitElement {
  static styles = styles;

  @property({ type: String, reflect: true })
  name: string;

  @property({ type: String, reflect: true })
  tags: string;

  @property({ type: String, reflect: true })
  imageUrl: string;

  @property({ type: String, reflect: true })
  projectUrl: string;

  @property({ type: String, reflect: true })
  codeUrl: string;

  render() {
    return html`
      <img src="${this.imageUrl}" alt="${this.name}" />
      <h3>
        <portfolio-text variant="title-small">${this.name}</portfolio-text>
      </h3>
      <ul>
        ${this.tags &&
        this.tags.split(", ").map(
          (tag) =>
            html`
              <li>
                <portfolio-text variant="body-large">${tag}</portfolio-text>
              </li>
            `
        )}
      </ul>
      <div>
        <portfolio-button url="${this.projectUrl}">
          <portfolio-text variant="label-large">view project</portfolio-text>
        </portfolio-button>
        <portfolio-button url="${this.codeUrl}">
          <portfolio-text variant="label-large">view code</portfolio-text>
        </portfolio-button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-project": PorfolioProject;
  }
}
