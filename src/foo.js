/**
 * foo
 */

import $ from 'jquery';

const bar = function() {
    console.log('Unused function');
};

const foo = {
    baz() {
        console.log('Links length: ' + $('a[href]').length);
    }
};

export default foo;