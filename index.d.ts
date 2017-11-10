/***********************************************************************************************************************
Example in TypeScript:

import SenseError from '@sense/error';

class ErrorA extends SError {};
class ErrorB extends SError {};

try {
    throw new ErrorB();
} catch (e) {
    if (e instanceOf ErrorA)
        console.log('Error type A');
    if (e instanceOf ErrorB)
        console.log('Error type B');
}

try {
    throw new ErrorA();
} catch (e) {
    const errorMap = {
        [ErrorA]: () => console.log('Error type A'),
        [ErrorB]: () => console.log('Error type B')
    };
    // Prepare the case that the `errorMap` doesn't have the key about `e`
    (errorMap[e.constructor] | () => {})();
}

***********************************************************************************************************************/

export default class SenseError extends Error {
    constructor(args?: { message?: string, details?: any } | string)

    message: string;
    details: any;
}
