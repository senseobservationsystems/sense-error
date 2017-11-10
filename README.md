# Sense Error
Inheritable error class in JS

## How to install

Run `npm install @sense-os/error --save`.

## How to use

```javascript
import SenseError from '@sense/error';

class ErrorA extends SError {};
class ErrorB extends SError {};

try {
    throw new ErrorA();
} catch (e) {
    if (e instanceOf ErrorA)
        console.log('Error type A');
    if (e instanceOf ErrorB)
        console.log('Error type B');
}

try {
    throw new ErrorB();
} catch (e) {
    const errorMap = {
        [ErrorA]: () => console.log('Error type A'),
        [ErrorB]: () => console.log('Error type B')
    };
    // Prepare the case that the `errorMap` doesn't have the key about `e`
    (errorMap[e.constructor] | () => {})();
}
```
