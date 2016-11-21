/**
 * app
 */

import foo from './foo';

const demo = {
    init() {
        console.log('Demo.init');

        foo.baz();
    }
};

demo.init();