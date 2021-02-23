import { Router } from "@vaadin/router";


//partials
import Navigation from "./components/navigation/navigation.js"
import Footer from "./components/footer/footer.js"

window.customElements.define("navigation-component", Navigation);
window.customElements.define("footer-component", Footer);

import Home from "./components/home/home.js";
import Register from "./components/register/register.js";
import Login from "./components/login/login.js";
import Logout from "./components/logout/logout.js";

window.customElements.define("home-component", Home);
window.customElements.define("register-component", Register);
window.customElements.define("login-component", Login);
window.customElements.define("logout-component", Logout);


//initialize firebase Auth.
(() =>{
  var firebaseConfig = {
    apiKey: "AIzaSyAj2VFm9uCcptEhG8yYNqHaM6tNndcgJCw",
    authDomain: "movies-97408.firebaseapp.com",
    databaseURL: "https://movies-97408-default-rtdb.firebaseio.com",
    projectId: "movies-97408",
    storageBucket: "movies-97408.appspot.com",
    messagingSenderId: "954372442277",
    appId: "1:954372442277:web:204a1cc6fb74af1ea5254c",
  };
  
  firebase.initializeApp(firebaseConfig);  
})()

const router = new Router(document.getElementById("app"));

router.setRoutes([
  {
    path: "/",
    component: "home-component",
  },
  {
    path: "/register",
    component: "register-component",
  },
  {
    path: "/login",
    component: "login-component",
  },
  {
    path: "/logout",
    component: "logout-component",
  },
]);
