class ProgressBar {
    constructor(params) {
        this.selector = params.selector;
        this.position = params.insertionPosition || 'beforeend';
        this.DOM = null;
        this.data = params.data;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return;
        }

        this.render();
        this.addEvents();
        this.detectElementVisibility();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    render() {
        let HTML = '';

        for (let bar of this.data) {
            HTML += `<div class="progress-bar">
                        <div class="label">${bar.label}</div>
                        <div class="full-bar">
                            <div class="bar-length" data-value="${bar.value}">
                                <div class="bar" data-value="${bar.value}"></div>
                            </div>
                        </div>
                    </div>`;
        }

        this.DOM.insertAdjacentHTML('beforeend', HTML);
    }

    detectElementVisibility() {
        console.log('check...');
        const progressBars = this.DOM.querySelectorAll('.progress-bar');
        const screenBottomY = scrollY + innerHeight;

        for (let bar of progressBars) {
            if (bar.classList.contains('animate')) {
                continue;
            }
            const barBottomY = bar.offsetHeight + bar.offsetTop;
            if (barBottomY < screenBottomY) {
                bar.classList.add('animate');
                const child = bar.querySelector('.bar-length');
                child.style.width = child.dataset.value + '%';
            }
        }
    }

    addEvents() {
        window.addEventListener('scroll', () => {
            this.detectElementVisibility();
        });
    }
}

export { ProgressBar }