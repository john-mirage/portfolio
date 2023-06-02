import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./portfolio-project-list.style";
import globalStyles from "../../styles/globals";
import projects from "../../data/projects";

@customElement("portfolio-project-list")
export class PorfolioProjectList extends LitElement {
  static styles = [globalStyles, styles];

  render() {
    return html`
      <section>
        <h2 class="title">
          <portfolio-text variant="title-large">Projects</portfolio-text>
        </h2>
        <ul class="list">
          ${projects.map(
            (project) =>
              html`
                <portfolio-project
                  name="${project.name}"
                  tags="${project.tags}"
                  imageUrl="${project.imageUrl}"
                  projectUrl="${project.projectUrl}"
                  codeUrl="${project.codeUrl}"
                ></portfolio-project>
              `
          )}
        </ul>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-project-list": PorfolioProjectList;
  }
}
