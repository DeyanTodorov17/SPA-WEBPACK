import { html, render } from "lit-html";
import moviesService from "../../services/moviesService.js"
import authService from "../../services/authService.js"

const template = (data) => html`
    <navigation-component></navigation-component>
    <form class="text-center border border-light p-5" action="#" method="">
        <h1>Edit Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input type="text" class="form-control" value="${data.title}" name="title">
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea class="form-control" placeholder=${data.description} name="description"></textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input type="text" class="form-control" value="${data.imageUrl}" name="imageUrl">
        </div>
        <button type="submit" class="btn btn-primary" @click=${data.editMovie}>Submit</button>
    </form>
    <footer-component></footer-component>
    `

class EditMovie extends HTMLElement{
    connectedCallback(){
        const editMovie = moviesService.editMovie.bind(authService);
        const id = this.location.params.id

        moviesService.oneMovie(id)
        .then(movie =>{
            Object.assign(this,movie,{editMovie})
            this.render()
        })
    }
    render(){
        render(template(this),this)
    }
}

export default EditMovie