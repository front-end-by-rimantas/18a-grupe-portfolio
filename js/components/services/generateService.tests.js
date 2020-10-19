import { Tester } from '../../Tester/Tester.js';
import { generateService } from './generateService.js';

const test = new Tester();

test.description('Generate services');

test.expect(generateService(), '');
test.expect(generateService(5), '');
test.expect(generateService({}), '');
test.expect(generateService(true), '');
test.expect(generateService(false), '');
test.expect(generateService([]), '');
test.expect(generateService(null), '');

test.run();