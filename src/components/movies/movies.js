import { html, render } from "lit-html";
import moviesService from "/Users/1/Desktop/Js applications/webpack-workshop/src/services/moviesService.js";

const template = (data) => html`
  <h1 class="text-center">Movies</h1>
  <section>
    <a href="/add-movie" class="btn btn-warning ">Add Movie</a>
    <form class="search float-right">
      <label>Search: </label>
      <input type="text" />
      <input type="submit" class="btn btn-info" value="Search" />
    </form>
  </section>

  <div class=" mt-3 ">
    <div class="row d-flex d-wrap">
      <div class="card-deck d-flex justify-content-center">
          ${data.movies.length
            ? html`${data.movies.map(
                (movie) =>
                  html`
                  <div class="card mb-4">
                    <one-movie-component .movie=${movie}></one-movie-component>
                    </div>
                    `
              )}`
              : html`<h3>No movies</h3>`
            }
      </div>
    </div>
  </div>
  `;

class Movies extends HTMLElement {
  connectedCallback() {
    moviesService.getAllMovies().then((movies) => {
      console.log(movies);
      if (!movies) {
        movies = [];
      }
      movies = Object.values(movies).filter((x) => x != null);

      Object.assign(this, { movies });

      this.render();
    });
  }

  render() {
    render(template(this), this);
  }
}

export default Movies;
