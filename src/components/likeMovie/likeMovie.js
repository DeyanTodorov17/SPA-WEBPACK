import { Router } from "@vaadin/router";
import { html, render } from "lit-html";
import moviesService from "/Users/1/Desktop/Js applications/webpack-workshop/src/services/moviesService.js";
import authService from "/Users/1/Desktop/Js applications/webpack-workshop/src/services/authService.js";

const template = (data) => html`
  <navigation-component></navigation-component>
  <div class="container">
    <div class="row bg-light text-dark">
      <h1>${data.title}</h1>

      <div class="col-md-8">
        <img class="img-thumbnail" src="${data.imageUrl}" alt="Movie" />
      </div>
    </div>
  </div>

  <footer-component></footer-component>
`;

class LikeMovie extends HTMLElement {
  constructor() {
    super();
    this.url = `https://movies-97408-default-rtdb.firebaseio.com/`;
  }

  connectedCallback() {
    const email = authService.getData().email;
    const id = this.location.params.id;

    moviesService.oneMovie(id).then((data) => {
      this.render(data);

      let likes = JSON.parse(data.likes);
      likes[email] = true;
      likes = JSON.stringify(likes);

      fetch(`${this.url}/${id}/.json`, {
        method: "PATCH",
        body: JSON.stringify({ likes }),
      }).then(() => {
        Router.go(`/details/${id}`);
      });
      
    });
  }
  render(data) {
    render(template(data), this);
  }
}

export default LikeMovie;
