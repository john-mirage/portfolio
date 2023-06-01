import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./portfolio-project.style";
import globalStyles from "../../styles/globals";

@customElement("portfolio-project")
export class PorfolioProject extends LitElement {
  static styles = [globalStyles, styles];

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
      <article>
        <img class="image" src="${this.imageUrl}" alt="${this.name}" />
        <h3 class="name">
          <portfolio-text variant="title-very-small"
            >${this.name}</portfolio-text
          >
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
              <portfolio-text variant="label-large"
                >view project</portfolio-text
              >
            </a>
          </portfolio-button>
          <portfolio-button>
            <a href="${this.codeUrl}">
              <portfolio-text variant="label-large">view code</portfolio-text>
            </a>
          </portfolio-button>
        </div>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-project": PorfolioProject;
  }
}
