import {html, render} from 'lit-html';
import authService from "/Users/1/Desktop/Js applications/webpack-workshop/src/services/authService.js"

const template = (data) => html`
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a class="navbar-brand text-light" href="/">Movies</a>
        <ul class="navbar-nav ml-auto ">
            ${data.isAuthenticated 
                ? html`
                    <li class="nav-item">
                        <a class="nav-link">Welcome, ${data.email}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/logout">Logout</a>
                    </li>
            `
                : html`
                    <li class="nav-item">
                        <a class="nav-link" href="/login">Login</a>
                    </li> 
                    <li class="nav-item">
                        <a class="nav-link" href="/register">Register</a>
                    </li> 
                `
            }
        </ul>
    </nav>
`


class Navigation extends HTMLElement{
    connectedCallback(){
        const additionalData = authService.getData() // am i authenticated?
        Object.assign(this,additionalData)
        this.render()
    }

    render(){
        render(template(this),this)
    }
}


export default Navigation