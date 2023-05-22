import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import {
  githubIcon,
  frontendMentorIcon,
  linkedInIcon,
  twitterIcon,
  defaultIcon,
} from "./icons";
import styles from "./portfolio-icon.style";

@customElement("portfolio-icon")
export class PorfolioIcon extends LitElement {
  static styles = styles;

  @property({ type: String, reflect: true })
  icon: string;

  render() {
    switch (this.icon) {
      case "github":
        return githubIcon;
      case "frontend-mentor":
        return frontendMentorIcon;
      case "linkedin":
        return linkedInIcon;
      case "twitter":
        return twitterIcon;
      default:
        return defaultIcon;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-icon": PorfolioIcon;
  }
}
