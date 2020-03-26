import serve from 'rollup-plugin-serve';
import { eslint } from 'rollup-plugin-eslint';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import typescript from 'rollup-plugin-typescript';

export default {
  input: './src/index.ts',
  output: {
    file: './dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    serve({
      port: 8080,
      contentBase: ['./dist'],
      open: true,
    }),
    typescript(),
    htmlTemplate({
      template: 'src/template.html',
      target: 'index.html',
    }),
    eslint({
      include: ['src/**/*.js', 'src/**/*.ts']
    })
  ]
};