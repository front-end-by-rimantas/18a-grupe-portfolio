import { Tester } from '../../Tester/Tester.js';
import { isValidSingleService } from './isValidSingleService.js';

const test = new Tester();

test.expect(isValidSingleService(), false);
test.expect(isValidSingleService(5), false);
test.expect(isValidSingleService('asd'), false);
test.expect(isValidSingleService(true), false);
test.expect(isValidSingleService(false), false);
test.expect(isValidSingleService([]), false);
test.expect(isValidSingleService({}), false);
test.expect(isValidSingleService({
    id: 1,
    icon: 'flaticon-computer-graphic',
    title: '',
    description: 'Continually scale resource-leveling vectors without best-of-breed schemas. Assertively initiate backward-compatible',
    active: true
}), false);
test.expect(isValidSingleService({
    id: 1,
    icon: '',
    title: 'Interface Design',
    description: 'Continually scale resource-leveling vectors without best-of-breed schemas. Assertively initiate backward-compatible',
    active: true
}), false);
test.expect(isValidSingleService({
    id: 1,
    icon: 'flaticon-computer-graphic',
    title: 'Interface Design',
    description: '',
    active: true
}), false);
test.expect(isValidSingleService({
    id: 1,
    icon: 'flaticon-computer-graphic',
    title: 'Interface Design',
    description: 'Continually scale resource-leveling vectors without best-of-breed schemas. Assertively initiate backward-compatible',
    active: false
}), false);
test.expect(isValidSingleService({
    id: 1,
    icon: 'flaticon-computer-graphic-non-existing',
    title: 'Interface Design',
    description: 'Continually scale resource-leveling vectors without best-of-breed schemas. Assertively initiate backward-compatible',
    active: true
}), false);
test.expect(isValidSingleService({
    id: 1,
    title: 'Interface Design',
    description: 'Continually scale resource-leveling vectors without best-of-breed schemas. Assertively initiate backward-compatible',
    active: true
}), false);

test.expect(isValidSingleService({
    id: 1,
    icon: 'flaticon-computer-graphic',
    title: 'Interface Design',
    description: 'Continually scale resource-leveling vectors without best-of-breed schemas. Assertively initiate backward-compatible',
    active: true
}), true);
test.expect(isValidSingleService({
    id: 2,
    icon: 'flaticon-ui',
    title: 'Experience Design',
    description: 'Continually scale resource-leveling vectors without best-of-breed schemas. Assertively initiate backward-compatible',
    active: true
}), true);

test.run();