class URL {
    constructor() {
        this.githubPathname = '/18a-grupe-portfolio/';
        this.DOMAINS = [
            '127.0.0.1',
            'localhost',
            'front-end-by-rimantas.github.io'
        ];
        this.domain = location.hostname;
    }

    fullURL(path) {
        // return protocol + domain + path;
    }

    static isHomePage() {
        const githubPathname = '/18a-grupe-portfolio/';
        const DOMAINS = [
            '127.0.0.1',
            'localhost',
            'front-end-by-rimantas.github.io'
        ];
        const domain = location.hostname;

        if (domain === DOMAINS[0] ||
            domain === DOMAINS[1]) {
            // localhost
            if (location.pathname === '/') {
                return true;
            }
        } else {
            // github
            if (location.pathname === githubPathname) {
                return true;
            }
        }
        return false;
    }
}

export { URL }