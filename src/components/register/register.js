import { html, render } from "lit-html";
import authService from "/Users/1/Desktop/Js applications/webpack-workshop/src/services/authService.js";

const template = (data) =>html`
    <navigation-component></navigation-component>
    <form class="text-center border border-light p-5">
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" placeholder="Email" name="email" value="">
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" placeholder="Password" name="password" value="">
    </div>
    
    <div class="form-group">
        <label for="repeatPassword">Repeat Password</label>
        <input type="password" class="form-control" placeholder="Repeat-Password" name="repeatPassword" value="">
    </div>
    
    <button type="submit" class="btn btn-primary" @click=${data.register}>Register</button>
    </form>
    <footer-component></footer-component>
`

class Register extends HTMLElement{
    connectedCallback(){
       const register = authService.register.bind(authService)

       Object.assign(this,{register})
       this.render()
    }

    render(){
        render(template(this),this)
    }
}


export default Register