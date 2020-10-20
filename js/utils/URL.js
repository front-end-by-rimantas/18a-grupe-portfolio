class URL {
    constructor() {
        this.domain = location.hostname;
    }

    /**
     * @returns Pirma URL kelio sudadamoji dalis, kuri eina tiesiai po DOMAIN dalies Github'e
     */
    static githubPathname() {
        return '/18a-grupe-portfolio/';
    }

    /**
     * @returns Sarasas galimu DOMAIN daliu, t.y. tiek local, tiek Github.
     */
    static DOMAINS() {
        return [
            '127.0.0.1',
            'localhost',
            'front-end-by-rimantas.github.io'
        ];
    }

    /**
     * @returns Grazina pilna kelia pagrindines URL dalies, t.y. protocol + domain + port (jei yra), bei jei iskviecia Github'e, tai prie grazinamo URL yra pridetas projekto kelias.
     */
    static baseURL() {
        let url = location.origin;

        if (location.hostname === URL.DOMAINS()[2]) {
            url += URL.githubPathname();
        }

        return url + '/';
    }

    /**
     * @returns {boolean} Grazina ar esame "home" puslapyje
     */
    static isHomePage() {
        const domain = location.hostname;

        if (domain === URL.DOMAINS()[0] ||
            domain === URL.DOMAINS()[1]) {
            // localhost
            if (location.pathname === '/') {
                return true;
            }
        } else {
            // github
            if (location.pathname === URL.githubPathname()) {
                return true;
            }
        }
        return false;
    }

    fullURL(path) {
        // return protocol + domain + path;
    }
}

export { URL }