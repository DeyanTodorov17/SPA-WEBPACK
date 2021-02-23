import { html, render } from "lit-html";
import moviesService from "/Users/1/Desktop/Js applications/webpack-workshop/src/services/moviesService.js";

const template = (data) =>html`
    <navigation-component></navigation-component>
    <form class="text-center border border-light p-5" action="#" method="">
        <h1>Add Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input type="text" class="form-control" placeholder="Title" name="title" value="">
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea class="form-control" placeholder="Description" name="description"></textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input type="text" class="form-control" placeholder="Image Url" name="imageUrl" value="">
        </div>
        <button type="submit" class="btn btn-primary" @click=${data.add}>Submit</button>
    </form>
    <footer-component></footer-component>
`

class AddMovie extends HTMLElement{
    connectedCallback(){
        const add = moviesService.addMovie
        Object.assign(this,{add})
        this.render()
    }

    render(){
        render(template(this),this)
    }

}

export default AddMovie