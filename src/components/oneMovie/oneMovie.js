import { html, render } from "lit-html";

const template = (data) =>html`
        <img class="card-img-top" src=${data.imageUrl} alt="Card image cap" width="400">
        <div class="card-body">
            <h4 class="card-title">${data.title}</h4>
        </div>
        <div class="card-footer">
            <a href="/details/${data.id}"><button type="button" class="btn btn-info">Details</button></a>
        </div>
    `

class OneMovie extends HTMLElement{
    connectedCallback(){
        Object.assign(this,this.movie)
        this.render()
    }

    render(){
        render(template(this),this)
    }
}

export default OneMovie