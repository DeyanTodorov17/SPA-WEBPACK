import { Router } from "@vaadin/router";
import authService from "../../src/services/authService.js"

const url = "https://movies-97408-default-rtdb.firebaseio.com/";

const moviesService = {
  async getAllMovies() {
    let f = await fetch(`${url}.json`);
    return f.json();
  },
  async oneMovie(id) {
    const f = await fetch(`${url}/${id}/.json`);
    return f.json();
  },
  addMovie(e) {
    e.preventDefault();

    const { title, description, imageUrl } = authService.getForm(
      e.target.parentElement,
      "title",
      "description",
      "imageUrl"
    );
    const creator = authService.getData().email;
    console.log(creator);
    const currentMovie = {
      title,
      description,
      imageUrl,
      creator,
      likes: "{}",
    };
    fetch(`${url}.json`, {
      method: "POST",
      body: JSON.stringify(currentMovie),
    })
      .then((data) => data.json())
      .then((key) => {
        const id = key.name;
        fetch(`${url}/${id}/.json`, {
          method: "PATCH",
          body: JSON.stringify({ id }),
        }).then(() => {
          Router.go("/");
        });
      });
  },
  likeData(movie) {
    const likes = Object.keys(JSON.parse(movie.likes));
    const email = authService.getData().email;

    const isLiked = likes.includes(email);
    const totalLikes = likes.length;

    return {
      isLiked,
      totalLikes,
    };
  },
  deleteMovie() {
    const { id } = this;

    fetch(`${url}/${id}/.json`, {
      method: "DELETE",
    }).then(() => {
      Router.go("/");
    });
  },
  editMovie(e) {
    e.preventDefault();

    const id = location.pathname.split("/").filter(x=>x!='')[1]

    const { title, imageUrl, description } = this.getForm(
      e.target.parentElement,
      "title",
      "description",
      "imageUrl"
    );

    fetch(`${url}/${id}/.json`,{
        method:"PATCH",
        body: JSON.stringify({title,imageUrl,description})
    })
    .then(() =>{
        Router.go(`/details/${id}`)
    })
  },
};

export default moviesService;
