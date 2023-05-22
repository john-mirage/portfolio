import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./portfolio-project-list.style";
import image from "../../images/age-calculator-app.jpg";

@customElement("portfolio-project-list")
export class PorfolioProjectList extends LitElement {
  static styles = styles;

  render() {
    return html`
      <portfolio-container>
        <div>
          <h2>
            <portfolio-text variant="title-large">Projects</portfolio-text>
          </h2>
          <portfolio-button>
            <portfolio-text variant="label-large">contact me</portfolio-text>
          </portfolio-button>
        </div>
        <ul>
          <li>
            <portfolio-project
              name="age calculator app"
              tags="html, css"
              imageUrl="${image}"
              projectUrl="https://www.frontendmentor.io/home"
              codeUrl="https://www.frontendmentor.io/home"
            ></portfolio-project>
          </li>
          <li>
            <portfolio-project
              name="age calculator app"
              tags="html, css"
              imageUrl="${image}"
              projectUrl="https://www.frontendmentor.io/home"
              codeUrl="https://www.frontendmentor.io/home"
            ></portfolio-project>
          </li>
          <li>
            <portfolio-project
              name="age calculator app"
              tags="html, css"
              imageUrl="${image}"
              projectUrl="https://www.frontendmentor.io/home"
              codeUrl="https://www.frontendmentor.io/home"
            ></portfolio-project>
          </li>
          <li>
            <portfolio-project
              name="age calculator app"
              tags="html, css"
              imageUrl="${image}"
              projectUrl="https://www.frontendmentor.io/home"
              codeUrl="https://www.frontendmentor.io/home"
            ></portfolio-project>
          </li>
          <li>
            <portfolio-project
              name="age calculator app"
              tags="html, css"
              imageUrl="${image}"
              projectUrl="https://www.frontendmentor.io/home"
              codeUrl="https://www.frontendmentor.io/home"
            ></portfolio-project>
          </li>
          <li>
            <portfolio-project
              name="age calculator app"
              tags="html, css"
              imageUrl="${image}"
              projectUrl="https://www.frontendmentor.io/home"
              codeUrl="https://www.frontendmentor.io/home"
            ></portfolio-project>
          </li>
        </ul>
      </portfolio-container>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-project-list": PorfolioProjectList;
  }
}
