import head from '../../img/f1-logo-white.svg';

class HeadTitle extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            :host {
                display: block;
                padding-top: 5px;
                padding-left: 20px;
                margin: 8px;
            }

            @media screen and (max-width: 1080px) {
                head-title {
                    text-align: center;
                }
            }
        </style>
        <img src="${head}" class="head-image" alt="f1-logo">
        `;
    }
}

customElements.define("head-title", HeadTitle);