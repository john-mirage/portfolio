import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./portfolio-project-list.style";
import desktopImage1 from "../../images/thumbnail-project-1-large.webp";
import desktopImage2 from "../../images/thumbnail-project-2-large.webp";
import desktopImage3 from "../../images/thumbnail-project-3-large.webp";
import desktopImage4 from "../../images/thumbnail-project-4-large.webp";
import desktopImage5 from "../../images/thumbnail-project-5-large.webp";
import desktopImage6 from "../../images/thumbnail-project-6-large.webp";
import globalStyles from "../../styles/globals";

@customElement("portfolio-project-list")
export class PorfolioProjectList extends LitElement {
  static styles = [globalStyles, styles];

  render() {
    return html`
      <h2 class="title">
        <portfolio-text variant="title-large">Projects</portfolio-text>
      </h2>
      <ul class="list">
        <li>
          <portfolio-project
            name="Newsletter sign-up form with success message"
            tags="html, css, javascript"
            imageUrl="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/zimchyd6aujs5y4h5wxd.jpg"
            projectUrl="https://john-mirage-fm-newsletter-sign-up-form.vercel.app/"
            codeUrl="https://github.com/john-mirage/frontend-mentor/tree/main/apps/newsletter-sign-up-form"
          ></portfolio-project>
        </li>
        <li>
          <portfolio-project
            name="Age calculator app"
            tags="html, css, javascript"
            imageUrl="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/mwjogovjjnkz6f6yzdkp.jpg"
            projectUrl="https://john-mirage-fm-age-calculator-app.vercel.app/"
            codeUrl="https://github.com/john-mirage/frontend-mentor/tree/main/apps/age-calculator-app"
          ></portfolio-project>
        </li>
        <li>
          <portfolio-project
            name="Results summary component"
            tags="html, css, javascript"
            imageUrl="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/b03akozsxsouireonkkd.jpg"
            projectUrl="https://john-mirage-fm-results-summary-components.vercel.app/"
            codeUrl="https://github.com/john-mirage/fm-results-summary-components"
          ></portfolio-project>
        </li>
        <li>
          <portfolio-project
            name="Ping single column coming soon page"
            tags="html, css, javascript"
            imageUrl="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/qjiprcu1e19yvujjrflv.jpg"
            projectUrl="https://john-mirage-fm-ping-coming-soon-page.vercel.app/"
            codeUrl="https://github.com/john-mirage/fm-ping-coming-soon-page"
          ></portfolio-project>
        </li>
        <li>
          <portfolio-project
            name="News homepage"
            tags="html, css, javascript"
            imageUrl="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/abbzt6kmkawmpbj7evxx.jpg"
            projectUrl="https://john-mirage-fm-news-homepage.vercel.app/"
            codeUrl="https://github.com/john-mirage/fm-news-homepage"
          ></portfolio-project>
        </li>
        <li>
          <portfolio-project
            name="Meet landing page"
            tags="html, css, javascript"
            imageUrl="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/edwlbe4gedvld6yqyazw.jpg"
            projectUrl="https://john-mirage-fm-meet-landing-page.vercel.app/"
            codeUrl="https://github.com/john-mirage/fm-meet-landing-page"
          ></portfolio-project>
        </li>
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-project-list": PorfolioProjectList;
  }
}
