import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./portfolio-contact.style";
import globalStyles from "../../styles/globals";

@customElement("portfolio-contact")
export class PorfolioContact extends LitElement {
  static styles = [globalStyles, styles];

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
        <portfolio-text class="inputs" variant="body-large">
          <input class="input" type="text" placeholder="name" />
          <input class="input" type="email" placeholder="email" />
          <textarea
            class="input"
            cols="30"
            rows="10"
            placeholder="message"
          ></textarea>
        </portfolio-text>
        <portfolio-button class="button">
          <button type="submit">
            <portfolio-text variant="label-large">send message</portfolio-text>
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
