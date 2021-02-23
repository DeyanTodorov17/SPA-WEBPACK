import { Router } from "@vaadin/router";
import { html, render } from "lit-html";

const template = () => html` <home-component></home-component> `;

class Logout extends HTMLElement {
  connectedCallback() {
    localStorage.removeItem("user");
    render(template(), this);
    setTimeout(() => {
      Router.go("/");
    }, 0);
  }
}

export default Logout;
