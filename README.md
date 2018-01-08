# Sense Error
Inheritable error class in JS

## How to install

Run `npm install @sense-os/error --save`.

## How to use

```javascript
// Importing can be different based on the environment. Please check the next section in the README
import * from SenseError from '@sense/error';

class ErrorA extends SenseError {};
class ErrorB extends SenseError {};

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
    (errorMap[e] | () => {})();
}
```

### Importing based on environment

#### On Node.js (and the packagers that understand `require` and `module.exports`) environment

```
var SenseError = require('@sense/error');
```

#### On TypeScript environment

```
import SenseError = require('@sense/error');
```

##### With the `target` [compiler option](https://www.typescriptlang.org/docs/handbook/compiler-options.html) `es2015` or higher

```
import * as SenseError from '@sense/error';
```

If you turn the `allowSyntheticDefaultImports` compiler option `true`, you can import with:
```
import SenseError from `@sense/error';
```
