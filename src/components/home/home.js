import { html, render } from "lit-html";
import authService from "/Users/1/Desktop/Js applications/webpack-workshop/src/services/authService.js";

const template = (data) => html`
  <navigation-component></navigation-component>
  <div class="jumbotron jumbotron-fluid text-light" style="background-color: #343a40;">
       <img src="https://s.studiobinder.com/wp-content/uploads/2019/06/Best-M-Night-Shyamalan-Movies-and-Directing-Style-StudioBinder.jpg"
           class="img-fluid" alt="Responsive image">
       <h1 class="display-4">Movies</h1>
       <p class="lead">Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.</p>
   </div> 
  ${data.isAuthenticated 
    ? html`
        <movies-component></movies-component>
    ` 
    : ""
    }
  <footer-component></footer-component>
`;

class Home extends HTMLElement {
  connectedCallback() {
    const authData = authService.getData()
    Object.assign(this,authData)
    this.render();
  }

  render() {
    render(template(this), this);
  }
}

export default Home;
