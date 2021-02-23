import { Router } from "@vaadin/router";
import { html, render } from "lit-html";
import authService from "/Users/1/Desktop/Js applications/webpack-workshop/src/services/authService.js";

const template = () => html` <home-component></home-component> `;

class Logout extends HTMLElement {
  connectedCallback() {
    authService.logout()
    this.render()
    
    setTimeout(() => {
      Router.go("/");
    }, 0);
  }
  render(){
    render(template(),this)
  }
}

export default Logout;
