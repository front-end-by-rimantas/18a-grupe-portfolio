class Tester {
    constructor() {
        this.tests = [];
    }

    expect(calculatedValue, expectedValue) {
        // this.tests.push([calculatedValue, expectedValue]);
        this.tests.push({
            calculated: calculatedValue,
            expected: expectedValue
        });
    }

    run() {
        // pereina per testu rezultatu poras ir palygina, kurios buvo sekmingos
        const count = this.tests.length;
        let positive = 0;
        let failed = [];
        for (let i = 0; i < count; i++) {
            const testCouple = this.tests[i];
            if (testCouple.calculated === testCouple.expected) {
                positive++;
            } else {
                failed.push(i);
            }
        }

        if (failed.length) {
            console.log(`%cisValidSingleService: ${positive}/${count} ok, ${count - positive}/${count} failed`, 'font-weight: bold;');

            const failedCount = failed.length;
            for (let i = 0; i < failedCount; i++) {
                const testIndex = failed[i];
                const testCouple = this.tests[testIndex];

                console.log(`%cisValidSingleService: ${testIndex + 1} test failed`, 'color: red;');
                console.log(`%c   got: ${testCouple.calculated};`, 'color: red;');
                console.log(`%c   expected: ${testCouple.expected};`, 'color: red;');
            }
        } else {
            console.log(`%cisValidSingleService: ${positive}/${count} ok`, 'color: green; font-weight: bold;');
        }
    }
}

export { Tester }


// JEI NERA KLAIDU:
// isValidSingleService: 8/8 ok                             (zalias bold)

// JEI YRA KLAIDU:
// isValidSingleService: 6/8 ok, 2/8 fail                   (juodas bold)
// isValidSingleService: 4 test failed (true -> false)      (raudonas)
// isValidSingleService: 7 test failed                      (raudonas)