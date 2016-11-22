/**
 * foo
 */

import $ from 'jquery';

const foo = {
    baz() {
        console.log('Links length: ' + $('a[href]').length);
    }
};

export default foo;