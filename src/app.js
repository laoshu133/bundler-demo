/**
 * app
 */

import foo from './foo';

const demo = {
    init() {
        console.log('App.init');

        foo.baz();
    }
};

demo.init();