module.exports = {
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    rules: {
        semi: ['warn', 'always'],
        quotes: ['warn', 'single'],
        indent: ['warn', 2],
        'keyword-spacing': ['warn', {after: true}],
        'object-curly-spacing': ['warn', 'always']
    }
};