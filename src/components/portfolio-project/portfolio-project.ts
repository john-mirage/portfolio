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
  smallImageUrl: string;

  @property({ type: String, reflect: true })
  largeImageUrl: string;

  @property({ type: String, reflect: true })
  projectUrl: string;

  @property({ type: String, reflect: true })
  codeUrl: string;

  render() {
    return html`
      <picture class="image-section">
        <source srcset="${this.largeImageUrl}" media="(min-width: 768px)" />
        <img class="image" src="${this.largeImageUrl}" alt="${this.name}" />
      </picture>
      <h3 class="name">
        <portfolio-text variant="title-small">${this.name}</portfolio-text>
      </h3>
      <ul class="tag-list">
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
      <div class="button-section">
        <portfolio-button>
          <a href="${this.projectUrl}">
            <portfolio-text variant="label-large">view project</portfolio-text>
          </a>
        </portfolio-button>
        <portfolio-button>
          <a href="${this.codeUrl}">
            <portfolio-text variant="label-large">view code</portfolio-text>
          </a>
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
