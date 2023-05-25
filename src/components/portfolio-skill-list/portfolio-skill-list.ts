import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./portfolio-skill-list.style";
import globalStyles from "../../styles/globals";

@customElement("portfolio-skill-list")
export class PorfolioSkillList extends LitElement {
  static styles = [globalStyles, styles];

  render() {
    return html`
      <portfolio-container>
        <ul>
          <li>
            <portfolio-skill
              topic="HTML"
              skill="4 Years Experience"
            ></portfolio-skill>
          </li>
          <li>
            <portfolio-skill
              topic="CSS"
              skill="4 Years Experience"
            ></portfolio-skill>
          </li>
          <li>
            <portfolio-skill
              topic="Javascript"
              skill="4 Years Experience"
            ></portfolio-skill>
          </li>
          <li>
            <portfolio-skill
              topic="Accessibility"
              skill="4 Years Experience"
            ></portfolio-skill>
          </li>
          <li>
            <portfolio-skill
              topic="React"
              skill="3 Years Experience"
            ></portfolio-skill>
          </li>
          <li>
            <portfolio-skill
              topic="Sass"
              skill="3 Years Experience"
            ></portfolio-skill>
          </li>
        </ul>
      </portfolio-container>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-skill-list": PorfolioSkillList;
  }
}
