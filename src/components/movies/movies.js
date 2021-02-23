import { html, render } from "lit-html";
import moviesService from "/Users/1/Desktop/Js applications/webpack-workshop/src/services/moviesService.js";

const template = (data) => html`
    <h1 class="text-center">Movies</h1>
        <section>
            <a href="#" class="btn btn-warning ">Add Movie</a>
            <form class="search float-right">
                <label>Search: </label>
                <input type="text">
                <input type="submit" class="btn btn-info" value="Search">
            </form>
        </section>
        
        <div class=" mt-3 ">
            <div class="row d-flex d-wrap">
        
                <div class="card-deck d-flex justify-content-center">
        
                    <div class="card mb-4">
                        <img class="card-img-top" src="https://pbs.twimg.com/media/ETINgKwWAAAyA4r.jpg" alt="Card image cap" width="400">
                        <div class="card-body">
                            <h4 class="card-title">Wonder Woman 1984</h4>
                        </div>
                        <div class="card-footer">
                            <a href="#/details/6lOxMFSMkML09wux6sAF"><button type="button" class="btn btn-info">Details</button></a>
                        </div>
        
                    </div>
                    <div class="card mb-4">
                        <img class="card-img-top" src="https://pbs.twimg.com/media/ETINgKwWAAAyA4r.jpg" alt="Card image cap" width="400">
                        <div class="card-body">
                            <h4 class="card-title">Wonder Woman 1984</h4>
                        </div>
                        <div class="card-footer">
                            <a href="#/details/6lOxMFSMkML09wux6sAF"><button type="button" class="btn btn-info">Details</button></a>
                        </div>
        
                    </div>
                    <div class="card mb-4">
                        <img class="card-img-top" src="https://pbs.twimg.com/media/ETINgKwWAAAyA4r.jpg" alt="Card image cap" width="400">
                        <div class="card-body">
                            <h4 class="card-title">Wonder Woman 1984</h4>
                        </div>
                        <div class="card-footer">
                            <a href="#/details/6lOxMFSMkML09wux6sAF"><button type="button" class="btn btn-info">Details</button></a>
                        </div>
        
                    </div>
                            
                </div>
            </div>
        </div>
        
`

class Movies extends HTMLElement{
    connectedCallback(){
        moviesService.getAllMovies()
        .then((movies) =>{
            movies = Object.values(movies)
            console.log(movies);
            
            Object.assign(this,{movies})

            this.render()
        })
    }

    render(){
        render(template(this),this)
    }
}


export default Movies