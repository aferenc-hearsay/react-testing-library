import { IPageContent, ITable } from '../../../types/interfaces';

export const eSLintPluginTestingLibraryRulesTable: ITable = {
    description:
        'Example rules supported by the plugin, and compatible with React. More rules can be found in the docs.',
    rows: [
        {
            key: 0,
            isHeader: true,
            content: [
                {
                    key: 0,
                    content: 'Rule',
                },
                {
                    key: 1,
                    content: 'Description',
                },
            ],
        },
        {
            key: 1,
            isHeader: false,
            content: [
                {
                    key: 0,
                    content: 'await-async-query',
                },
                {
                    key: 1,
                    content: 'Enforce promises from async queries to be handled',
                },
            ],
        },
        {
            key: 2,
            isHeader: false,
            content: [
                {
                    key: 0,
                    content: 'await-async-utils',
                },
                {
                    key: 1,
                    content: 'Enforce promises from async utils to be awaited',
                },
            ],
        },
        {
            key: 3,
            isHeader: false,
            content: [
                {
                    key: 0,
                    content: 'no-await-sync-query',
                },
                {
                    key: 1,
                    content: 'Disallow unnecessary await for sync queries',
                },
            ],
        },
        {
            key: 4,
            isHeader: false,
            content: [
                {
                    key: 0,
                    content: 'no-container',
                },
                {
                    key: 1,
                    content: 'Disallow the use of container methods',
                },
            ],
        },
        {
            key: 5,
            isHeader: false,
            content: [
                {
                    key: 0,
                    content: 'no-debugging-utils',
                },
                {
                    key: 1,
                    content: 'Disallow the use of debugging utils, like debug',
                },
            ],
        },
        {
            key: 6,
            isHeader: false,
            content: [
                {
                    key: 0,
                    content: 'no-dom-import',
                },
                {
                    key: 1,
                    content: 'Disallow importing from DOM Testing Library',
                },
            ],
        },
    ],
};

export const eSLintTestingLibraryPageContent: IPageContent = {
    title: 'ESLint and Testing Library',
    articles: [
        {
            sequenceId: 0,
            articleTitle: 'ESLint plugin for Testing Library',
            sections: [
                {
                    sectionSequenceId: 0,
                    content:
                        '<p>As the plugin define itself, it is a plugin for ESLint that checks your code to follow best ' +
                        'practices and anticipate common mistakes when writing tests with Testing Library.</p>',
                },
                {
                    sectionSequenceId: 1,
                    content:
                        '<p> You can find detailed documentation on the plugin\'s ' +
                        '<a href="https://github.com/testing-library/eslint-plugin-testing-library">GitHub repository</a>. ' +
                        'You can also find a summary of the plugin\'s rules and how to configure them on ' +
                        '<a href="https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules">this</a> ' +
                        'page</p>',
                },
            ],
        },
        {
            sequenceId: 1,
            articleTitle: 'Installation',
            sections: [
                {
                    sectionSequenceId: 0,
                    content: '<p>Install the plugin as a dev dependency:</p>',
                },
                {
                    sectionSequenceId: 1,
                    content: '<p><code>npm install --save-dev eslint, eslint-plugin-testing-library</code></p>',
                },
            ],
        },
        {
            sequenceId: 2,
            articleTitle: 'Configuration',
            sections: [
                {
                    sectionSequenceId: 0,
                    content:
                        '<p>Add testing-library to the plugins section of your .eslintrc.js configuration file. You can ' +
                        'omit the eslint-plugin- prefix</p>',
                },
                {
                    sectionSequenceId: 1,
                    content: '<p><code>module.exports = {<br>&nbsp;plugins: ["testing-library"]<br>};</code></p>',
                },
                {
                    sectionSequenceId: 2,
                    content:
                        '<p>Then configure the rules you want to use under the rules property of your .eslintrc:.</p>',
                },
                {
                    sectionSequenceId: 3,
                    content:
                        '<p><code>module.exports = {<br>&nbsp;rules: {' +
                        '<br>&nbsp;&nbsp;"testing-library/await-async-query": "error",<br>' +
                        '&nbsp;&nbsp;"testing-library/no-await-sync-query": "error",<br>' +
                        '&nbsp;&nbsp;"testing-library/no-dom-import": "off",<br>' +
                        '&nbsp;&nbsp;"testing-library/no-debugging-utils": "warn",<br>&nbsp;},<br>};',
                },
            ],
        },
    ],
};
