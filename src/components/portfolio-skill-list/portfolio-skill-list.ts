import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./portfolio-skill-list.style";
import globalStyles from "../../styles/globals";

@customElement("portfolio-skill-list")
export class PorfolioSkillList extends LitElement {
  static styles = [globalStyles, styles];

  render() {
    return html`
      <section>
        <h2 class="title">Skills</h2>
        <ul class="list">
          <li>
            <portfolio-skill topic="html" experience="2"></portfolio-skill>
          </li>
          <li>
            <portfolio-skill topic="css" experience="2"></portfolio-skill>
          </li>
          <li>
            <portfolio-skill
              topic="javascript"
              experience="1"
            ></portfolio-skill>
          </li>
          <li>
            <portfolio-skill
              topic="accessibility"
              experience="1"
            ></portfolio-skill>
          </li>
          <li>
            <portfolio-skill topic="react" experience="1"></portfolio-skill>
          </li>
          <li>
            <portfolio-skill topic="sass" experience="1"></portfolio-skill>
          </li>
        </ul>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-skill-list": PorfolioSkillList;
  }
}
