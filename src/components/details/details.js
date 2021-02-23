import { html, render } from "lit-html";
import moviesService from "/Users/1/Desktop/Js applications/webpack-workshop/src/services/moviesService.js";
import authService from "/Users/1/Desktop/Js applications/webpack-workshop/src/services/authService.js";


const template = (data) => html`
    <navigation-component></navigation-component>
    <div class="container">
        <div class="row bg-light text-dark">
        <h1>${data.title}</h1>

            <div class="col-md-8">
                <img class="img-thumbnail" src="${data.imageUrl}" alt="Movie">
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3 ">Movie Description</h3>
                <p>${data.description}</p>
                ${data.isCreator 
                    ? html`                    
                    <a class="btn btn-danger" href="#">Delete</a>
                    <a class="btn btn-warning" href="/edit/${data.id}">Edit</a>
                    `
                    : html`
                    ${data.isLiked 
                        ? html`<span class="enrolled-span">Liked ${data.totalLikes}</span>`
                        : html`<a class="btn btn-primary" href="#">Like</a>`
                    }
                    `
                }
            </div>
        </div>
    </div>
    <footer-component></footer-component>
`

class Details extends HTMLElement{
    connectedCallback(){
        const id = this.location.params.id
        moviesService.oneMovie(id)
        .then((movie)=>{
           
            const isCreator = authService.getData().email === movie.creator
            const {isLiked,totalLikes} = moviesService.likeData(movie)

            Object.assign(this,movie,{isCreator,isLiked,totalLikes})
            this.render()
        })
        
    }
    render(){
        render(template(this),this)
    }
}

export default Details