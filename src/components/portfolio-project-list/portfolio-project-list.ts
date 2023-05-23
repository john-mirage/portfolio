import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./portfolio-project-list.style";
import mobileImage1 from "../../images/thumbnail-project-1-small.webp";
import mobileImage2 from "../../images/thumbnail-project-2-small.webp";
import mobileImage3 from "../../images/thumbnail-project-3-small.webp";
import mobileImage4 from "../../images/thumbnail-project-4-small.webp";
import mobileImage5 from "../../images/thumbnail-project-5-small.webp";
import mobileImage6 from "../../images/thumbnail-project-6-small.webp";
import desktopImage1 from "../../images/thumbnail-project-1-large.webp";
import desktopImage2 from "../../images/thumbnail-project-2-large.webp";
import desktopImage3 from "../../images/thumbnail-project-3-large.webp";
import desktopImage4 from "../../images/thumbnail-project-4-large.webp";
import desktopImage5 from "../../images/thumbnail-project-5-large.webp";
import desktopImage6 from "../../images/thumbnail-project-6-large.webp";

@customElement("portfolio-project-list")
export class PorfolioProjectList extends LitElement {
  static styles = styles;

  render() {
    return html`
      <portfolio-container>
        <div class="row">
          <h2 class="title">
            <portfolio-text variant="title-large">Projects</portfolio-text>
          </h2>
          <portfolio-button>
            <portfolio-text variant="label-large">contact me</portfolio-text>
          </portfolio-button>
        </div>
        <ul class="list">
          <li>
            <portfolio-project
              name="age calculator app"
              tags="html, css"
              smallImageUrl="${mobileImage1}"
              largeImageUrl="${desktopImage1}"
              projectUrl="https://www.frontendmentor.io/home"
              codeUrl="https://www.frontendmentor.io/home"
            ></portfolio-project>
          </li>
          <li>
            <portfolio-project
              name="age calculator app"
              tags="html, css"
              smallImageUrl="${mobileImage2}"
              largeImageUrl="${desktopImage2}"
              projectUrl="https://www.frontendmentor.io/home"
              codeUrl="https://www.frontendmentor.io/home"
            ></portfolio-project>
          </li>
          <li>
            <portfolio-project
              name="age calculator app"
              tags="html, css"
              smallImageUrl="${mobileImage3}"
              largeImageUrl="${desktopImage3}"
              projectUrl="https://www.frontendmentor.io/home"
              codeUrl="https://www.frontendmentor.io/home"
            ></portfolio-project>
          </li>
          <li>
            <portfolio-project
              name="age calculator app"
              tags="html, css"
              smallImageUrl="${mobileImage4}"
              largeImageUrl="${desktopImage4}"
              projectUrl="https://www.frontendmentor.io/home"
              codeUrl="https://www.frontendmentor.io/home"
            ></portfolio-project>
          </li>
          <li>
            <portfolio-project
              name="age calculator app"
              tags="html, css"
              smallImageUrl="${mobileImage5}"
              largeImageUrl="${desktopImage5}"
              projectUrl="https://www.frontendmentor.io/home"
              codeUrl="https://www.frontendmentor.io/home"
            ></portfolio-project>
          </li>
          <li>
            <portfolio-project
              name="age calculator app"
              tags="html, css"
              smallImageUrl="${mobileImage6}"
              largeImageUrl="${desktopImage6}"
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
