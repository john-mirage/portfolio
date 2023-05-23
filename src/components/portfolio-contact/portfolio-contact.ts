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
      <form class="form">
        <input type="text" />
        <input type="text" />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <portfolio-button isLink="false">
          <portfolio-text variant="label-large">contact me</portfolio-text>
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
