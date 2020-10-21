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
        const tags = [];
        for (let item of this.data) {
            tags.push(item.tags);
        }
        console.log(tags);
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