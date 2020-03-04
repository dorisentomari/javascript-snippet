import rollup from 'rollup';
import serve from 'rollup-plugin-serve';
import { eslint } from 'rollup-plugin-eslint';
import htmlTemplate from 'rollup-plugin-generate-html-template';

export default {
  input: './src/index.js',
  output: {
    file: './dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    serve({
      port: 8080,
      contentBase: ['./dist']
    }),
    htmlTemplate({
      template: 'src/template.html',
      target: 'index.html',
    }),
    eslint({
      include: ['src/**/*.js']
    })
  ]
};