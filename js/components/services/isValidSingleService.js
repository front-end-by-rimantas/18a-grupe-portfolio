import { flaticons } from '../../data/flaticons.js';

function isValidSingleService(service) {
    let errors = [];

    if (typeof service.active !== 'boolean') {
        errors.push('ERROR: paslaugos aktyvumo busena turi buti boolean tipo.');
    }

    if (typeof service.title !== 'string') {
        errors.push('ERROR: paslaugos pavadinimas turi buti tekstinis.');
    } else {
        if (service.title === '') {
            errors.push('ERROR: paslaugos pavadinimas negali buti tuscias tekstas.');
        }
        if (service.title.length > 30) {
            errors.push('ERROR: paslaugos pavadinimas yra per ilgas.');
        }
    }

    if (typeof service.description !== 'string') {
        errors.push('ERROR: paslaugos aprasymas turi buti tekstinis.');
    } else {
        if (service.description === '') {
            errors.push('ERROR: paslaugos aprasymas negali buti tuscias tekstas.');
        }
        if (service.description.length > 150) {
            errors.push('ERROR: paslaugos aprasymas yra per ilgas.');
        }
    }

    if (typeof service.icon !== 'string') {
        errors.push('ERROR: paslaugos ikona turi buti tekstinis.');
    } else {
        if (service.icon === '') {
            errors.push('ERROR: paslaugos ikona negali buti tuscias tekstas.');
        }
        if (!flaticons.includes(service.icon)) {
            errors.push('ERROR: paslaugos ikonos klase neegzistuoja.');
        }
    }

    if (!service.active) {
        return false;
    }

    if (errors.length > 0) {
        for (let i = 0; i < errors.length; i++) {
            console.error(errors[i]);
        }
        return false;
    }

    return true;
}

export { isValidSingleService }