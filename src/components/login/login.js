import { html, render } from "lit-html";
import authService from "../../services/authService.js"


const template = (data) =>html`
        <navigation-component></navigation-component>
        <form class="text-center border border-light p-5" action="" method="">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" placeholder="Email" name="email" value="">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" placeholder="Password" name="password" value="">
            </div>
        
            <button type="submit" class="btn btn-primary" @click=${data.login}>Login</button>
        </form>
        <footer-component></footer-component>
`
class Login extends HTMLElement{
    connectedCallback(){
        const login = authService.login.bind(authService)
        
        Object.assign(this,{login})
        this.render()
    }

    render(){
        render(template(this),this)
    }
}

export default Login
