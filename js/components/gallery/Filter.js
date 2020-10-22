class Filter {
    constructor(params) {
        this.DOM = params.DOM;
        this.data = params.data;

        this.init();
    }

    init() {
        this.render();
        this.addEvents();
    }

    generateHTML() {
        let HTML = '';

        // isrinkta is visu darbu tagu sarasai i viena bendra
        const tags = [];
        for (let item of this.data) {
            tags.push(item.tags);
        }

        // surinkti tik unikaliu tagu sarasa
        const uniqueTags = [];
        for (let i = 0; i < tags.length; i++) {
            const vidinisArray = tags[i];
            for (let k = 0; k < vidinisArray.length; k++) {
                const tag = vidinisArray[k];
                if (!uniqueTags.includes(tag)) {
                    uniqueTags.push(tag);
                }
            }
        }

        // generuojame HTML
        HTML += `<div class="tag active">All</div>`;
        for (let tag of uniqueTags) {
            HTML += `<div class="tag">${tag}</div>`;
        }

        return HTML;
    }

    render() {
        this.DOM.innerHTML = this.generateHTML();
    }

    addEvents() {
        console.log('Po turinio generavimo registruojame event listener\'ius...');
    }
}

export { Filter }