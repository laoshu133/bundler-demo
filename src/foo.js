/**
 * foo
 */

const $ from 'jquery';

const foo = {
    baz() {
        console.log('Links length: %d', $('a[href]').length);
    }
};

export default foo;