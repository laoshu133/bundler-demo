import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
    sourceMap: false,
    entry: 'src/app.js',
    plugins: [
        // babel({
        //     runtimeHelpers: true,
        //     exclude: 'node_modules/**',
        //     presets: ['es2015-rollup']
        // }),
        nodeResolve({ jsnext: true }),
        commonjs()
    ],
    targets: [ {
        format: 'umd',
        dest: 'dist/rollup/app.js'
    } ]
};