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
            <portfolio-skill
              topic="HTML"
              skill="2 Years Experience"
            ></portfolio-skill>
          </li>
          <li>
            <portfolio-skill
              topic="CSS"
              skill="2 Years Experience"
            ></portfolio-skill>
          </li>
          <li>
            <portfolio-skill
              topic="Javascript"
              skill="1 Years Experience"
            ></portfolio-skill>
          </li>
          <li>
            <portfolio-skill
              topic="Accessibility"
              skill="1 Years Experience"
            ></portfolio-skill>
          </li>
          <li>
            <portfolio-skill
              topic="React"
              skill="1 Years Experience"
            ></portfolio-skill>
          </li>
          <li>
            <portfolio-skill
              topic="Sass"
              skill="1 Years Experience"
            ></portfolio-skill>
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
