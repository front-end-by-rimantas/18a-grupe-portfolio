import { capitalizeText } from '../../utils/capitalizeText.js';
import { isValidSingleService } from './isValidSingleService.js';

function generateService(service) {
    // params validation
    if (!isValidSingleService(service, true)) {
        return '';
    }

    // logic
    // TODO: pabaigti capitalizeText funkcijos logika
    const title = capitalizeText(service.title, true);

    const HTML = `<div class="col-4 col-md-6 col-sm-12">
                    <span class="${service.icon}"></span>
                    <h3>${title}</h3>
                    <p>${service.description}</p>
                </div>`;

    // output
    return HTML;
}

export { generateService }