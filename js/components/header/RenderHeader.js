import { URL } from '../../utils/URL.js';

class RenderHeader {
    constructor(params) {
        this.selector = params.selector;
        this.menuLinks = params.menu;

        this.DOM = null;
        this.baseURL = URL.baseURL();

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return;
        }

        this.render();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);  // false -> DOM = null
        if (DOM) {
            this.DOM = DOM;
            return true;
        }
        return false;
    }

    generateLogo() {
        if (URL.isHomePage()) {
            // TODO: jei esu Home psl, tai tik nuotrauka
            return `<img src="#" alt="Xenol project logo">`;
        } else {
            // TODO: jei esu kitame/vidiniame psl, tai nuotrauka nuorodoje
            return `<a href="/">
                        <img src="#" alt="Xenol project logo">
                    </a>`;
        }
    }

    isValidMenuLink(menuItem) {
        return true;
    }

    generateNav() {
        let HTML = '';
        for (let i = 0; i < this.menuLinks.length; i++) {
            const menuItem = this.menuLinks[i];
            if (!this.isValidMenuLink(menuItem)) {
                continue;
            }
            HTML += `<a href="${this.baseURL + menuItem.link}">${menuItem.text}</a>`;
        }
        return HTML;
    }

    isValidMenu() {
        if (!Array.isArray(this.menuLinks)) {
            return false;
        }
        if (this.menuLinks.length === 0) {
            return false;
        }
        return true;
    }

    generateHTML() {
        // validation
        if (!this.isValidMenu()) {
            return '';
        }

        // output
        return `${this.generateLogo()}
                <nav>
                    ${this.generateNav()}
                </nav>`;
    }

    render() {
        this.DOM.innerHTML = this.generateHTML();
    }
}

export { RenderHeader }