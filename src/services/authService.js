import { Router } from "@vaadin/router";

const authService = {
  getForm(target, ...x) {
    let formData = new FormData(target);
    return x.reduce((acc, param) => {
      acc[param] = formData.get(param);
      return acc;
    }, {});
  },
  getData() {
    if (localStorage.getItem("user")) {
      const email = JSON.parse(localStorage.getItem("user")).email;
      return {
        isAuthenticated: true,
        email,
      };
    }
    return { isAuthenticated: false };
  },
  register(e) {
    e.preventDefault();
    const { email, password, repeatPassword } = this.getForm(
      e.target.parentElement,
      "email",
      "password",
      "repeatPassword"
    );
    if (password !== repeatPassword) {
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: userCredential.user.email,
          })
        );
        Router.go("/");
      })
      .catch((error) => {
        //fix this!
        alert(error.message);
        Router.go("/");
      });
  },
  login(e) {
    e.preventDefault();
    const { email, password } = this.getForm(
      e.target.parentElement,
      "email",
      "password"
    );

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: userCredential.user.email,
          })
        );
        Router.go("/");
      });
  },
  logout(e) {},
};

export default authService;
