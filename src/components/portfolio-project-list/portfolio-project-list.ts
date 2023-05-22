import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./portfolio-project-list.style";
import image1 from "../../images/thumbnail-project-1-small.webp";
import image2 from "../../images/thumbnail-project-2-small.webp";
import image3 from "../../images/thumbnail-project-3-small.webp";
import image4 from "../../images/thumbnail-project-4-small.webp";
import image5 from "../../images/thumbnail-project-5-small.webp";
import image6 from "../../images/thumbnail-project-6-small.webp";

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
              imageUrl="${image1}"
              projectUrl="https://www.frontendmentor.io/home"
              codeUrl="https://www.frontendmentor.io/home"
            ></portfolio-project>
          </li>
          <li>
            <portfolio-project
              name="age calculator app"
              tags="html, css"
              imageUrl="${image2}"
              projectUrl="https://www.frontendmentor.io/home"
              codeUrl="https://www.frontendmentor.io/home"
            ></portfolio-project>
          </li>
          <li>
            <portfolio-project
              name="age calculator app"
              tags="html, css"
              imageUrl="${image3}"
              projectUrl="https://www.frontendmentor.io/home"
              codeUrl="https://www.frontendmentor.io/home"
            ></portfolio-project>
          </li>
          <li>
            <portfolio-project
              name="age calculator app"
              tags="html, css"
              imageUrl="${image4}"
              projectUrl="https://www.frontendmentor.io/home"
              codeUrl="https://www.frontendmentor.io/home"
            ></portfolio-project>
          </li>
          <li>
            <portfolio-project
              name="age calculator app"
              tags="html, css"
              imageUrl="${image5}"
              projectUrl="https://www.frontendmentor.io/home"
              codeUrl="https://www.frontendmentor.io/home"
            ></portfolio-project>
          </li>
          <li>
            <portfolio-project
              name="age calculator app"
              tags="html, css"
              imageUrl="${image6}"
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
