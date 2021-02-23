import { html, render } from "lit-html";
import authService from "/Users/1/Desktop/Js applications/webpack-workshop/src/services/authService.js";


const template = () =>html`

`
class Login extends HTMLElement{
    connectedCallback(){
        console.log("v login-a!");
    }
}

export default Login
