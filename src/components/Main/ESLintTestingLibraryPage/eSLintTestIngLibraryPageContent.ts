import { IPageContent } from '../../../types/interfaces';

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
