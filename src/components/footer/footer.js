import {html, render} from 'lit-html';

const template = () => html`
    <footer class="page-footer font-small">
        <div class="footer-copyright text-center py-3">© 2020
            <a href="https://softuni.bg/trainings/2840/js-applications-june-2020/internal" class="text-dark">JS Applications</a>
        </div>
    </footer>
`


class Footer extends HTMLElement{
    connectedCallback(){
        this.render()
    }

    render(){
        render(template(this),this)
    }
}


export default Footer