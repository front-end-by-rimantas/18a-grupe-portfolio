import { URL } from '../../utils/URL.js';

class PhotoList {
    constructor(params) {
        this.DOM = params.DOM;
        this.data = params.data;
        this.imgPath = params.imgPath;
        this.defaultImg = params.defaultImg;

        this.photosDOM = null;

        this.init();
    }

    init() {
        this.render();
    }

    generateHTML() {
        let HTML = '';
        const defaultImg = URL.baseURL() + this.imgPath + this.defaultImg;

        for (let item of this.data) {
            let imgAlt = item.imgAlt;
            if (!imgAlt) {
                imgAlt = `${item.name} project screenshot`;
            }

            HTML += `<div class="item ${item.gridCells === 2 ? 'cell-2' : ''}">
                        <img src="${URL.baseURL() + this.imgPath + item.img}" alt="${imgAlt}" onerror="this.src='${defaultImg}';">
                        <div class="overlay">
                            <div class="name">${item.name}</div>
                            <div class="link">
                                <a href="${item.url.github}" target="_blank" class="fa fa-github"></a>
                                <a href="${item.url.live}" target="_blank" class="fa fa-link"></a>
                            </div>
                        </div>
                    </div>`;
        }
        return HTML;
    }

    update(tag) {
        tag = tag.toLowerCase();
        console.log('rodom/nerodom:', tag);
        for (let i = 0; i < this.data.length; i++) {
            if (tag === 'all') {
                this.photosDOM[i].classList.remove('hidden');
                continue;
            }

            if (this.data[i].tags.includes(tag)) {
                this.photosDOM[i].classList.remove('hidden');
            } else {
                this.photosDOM[i].classList.add('hidden');
            }
        }
    }

    render() {
        this.DOM.innerHTML = this.generateHTML();

        this.photosDOM = this.DOM.querySelectorAll('.item');
    }
}

export { PhotoList }