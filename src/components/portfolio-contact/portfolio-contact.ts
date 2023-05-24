import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./portfolio-contact.style";

@customElement("portfolio-contact")
export class PorfolioContact extends LitElement {
  static styles = styles;

  render() {
    return html`
      <div class="text-section">
        <h2 class="title">
          <portfolio-text variant="title-large">Contact</portfolio-text>
        </h2>
        <p class="subtitle">
          <portfolio-text variant="body-large"
            >I would love to hear about your project and how I could help.
            Please fill in the form, and I’ll get back to you as soon as
            possible.
          </portfolio-text>
        </p>
      </div>
      <form>
        <input class="input" type="text" />
        <input class="input" type="text" />
        <textarea class="input" cols="30" rows="10"></textarea>
        <portfolio-button>
          <button type="submit">
            <portfolio-text variant="label-large">contact me</portfolio-text>
          </button>
        </portfolio-button>
      </form>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "portfolio-contact": PorfolioContact;
  }
}
