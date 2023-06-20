import { IPageContent, ITable } from '../../../types/interfaces';

export const toolsPageContent: IPageContent = {
    title: 'Testing Tools',
    articles: [
        {
            sequenceId: 0,
            articleTitle: 'Tools for frontend testing',
            sections: [
                {
                    sectionSequenceId: 0,
                    content: '<p>There are many tools for testing frontend applications. The most popular are:</p>',
                },
            ],
        },
    ],
};

export const toolsTable: ITable = {
    description: 'Test tools for React applications',
    rows: [
        {
            key: 0,
            isHeader: true,
            content: [
                {
                    key: 0,
                    content: 'Tool',
                },
                {
                    key: 1,
                    content: 'What is it for?',
                },
                {
                    key: 2,
                    content: 'Description',
                },
                {
                    key: 3,
                    content: 'Notes',
                },
            ],
        },
        {
            key: 1,
            isHeader: false,
            content: [
                {
                    key: 0,
                    content: 'Prettier',
                },
                {
                    key: 1,
                    content: 'Code formatting and checking',
                },
                {
                    key: 2,
                    content: 'Formatter',
                },
                {
                    key: 3,
                    content: '',
                },
            ],
        },
        {
            key: 2,
            isHeader: false,
            content: [
                {
                    key: 0,
                    content: 'Stylelint',
                },
                {
                    key: 1,
                    content: 'CSS linter',
                },
                {
                    key: 2,
                    content: 'Linter',
                },
                {
                    key: 3,
                    content: '',
                },
            ],
        },
        {
            key: 3,
            isHeader: false,
            content: [
                {
                    key: 0,
                    content: 'ESLint',
                },
                {
                    key: 1,
                    content: 'Code formatting and checking',
                },
                {
                    key: 2,
                    content: 'Formatter and linter',
                },
                {
                    key: 3,
                    content: '',
                },
            ],
        },
        {
            key: 4,
            isHeader: false,
            content: [
                {
                    key: 0,
                    content: 'SonarQube, SonarLint',
                },
                {
                    key: 1,
                    content: 'Code formatting and checking',
                },
                {
                    key: 2,
                    content: 'Formatter and linter',
                },
                {
                    key: 3,
                    content: '',
                },
            ],
        },
        {
            key: 5,
            isHeader: false,
            content: [
                {
                    key: 0,
                    content: 'Typescript',
                },
                {
                    key: 1,
                    content: 'Code formatting and checking',
                },
                {
                    key: 2,
                    content: 'Add type checking to JavaScript',
                },
                {
                    key: 3,
                    content: '',
                },
            ],
        },
        {
            key: 6,
            isHeader: false,
            content: [
                {
                    key: 0,
                    content: 'Jest',
                },
                {
                    key: 1,
                    content: 'Unit and integration tests, test runner',
                },
                {
                    key: 2,
                    content:
                        'Test isolated components, public API of component, basic user interactions, snapshot, async methods',
                },
                {
                    key: 3,
                    content: 'Recommended by the React community as testing framework',
                },
            ],
        },
        {
            key: 7,
            isHeader: false,
            content: [
                {
                    key: 0,
                    content: 'Mocha',
                },
                {
                    key: 1,
                    content: 'Testing framework',
                },
                {
                    key: 2,
                    content: 'Both synchronous and asynchronous testing',
                },
                {
                    key: 3,
                    content: 'Alternative to Jest, lack of complexity',
                },
            ],
        },
        {
            key: 8,
            isHeader: false,
            content: [
                {
                    key: 0,
                    content: 'Chai',
                },
                {
                    key: 1,
                    content: 'TDD/BDD assertion and expectation library',
                },
                {
                    key: 2,
                    content: '',
                },
                {
                    key: 3,
                    content: 'Often used with Mocha and Enzyme',
                },
            ],
        },
        {
            key: 9,
            isHeader: false,
            content: [
                {
                    key: 0,
                    content: 'Jasmine',
                },
                {
                    key: 1,
                    content: 'BDD testing framework and test runner',
                },
                {
                    key: 2,
                    content: 'When the project is large and integrated with external libraries',
                },
                {
                    key: 3,
                    content: 'Recommended by the React community as testing framework',
                },
            ],
        },
        {
            key: 10,
            isHeader: false,
            content: [
                {
                    key: 0,
                    content: 'Karma',
                },
                {
                    key: 1,
                    content: 'Test runner',
                },
                {
                    key: 2,
                    content: 'Runs tests against real devices and browsers',
                },
                {
                    key: 3,
                    content: '',
                },
            ],
        },
        {
            key: 11,
            isHeader: false,
            content: [
                {
                    key: 0,
                    content: 'Enzyme',
                },
                {
                    key: 1,
                    content: 'Test tools',
                },
                {
                    key: 2,
                    content: 'Access things, render components, interact with elements, simulate events',
                },
                {
                    key: 3,
                    content: 'Chai or Jest can make its assertions',
                },
            ],
        },
        {
            key: 12,
            isHeader: false,
            content: [
                {
                    key: 0,
                    content: 'Cypress.io',
                },
                {
                    key: 1,
                    content: 'E2E testing framework',
                },
                {
                    key: 2,
                    content: 'Standalone solution, can run in browser or CLI',
                },
                {
                    key: 3,
                    content: '',
                },
            ],
        },
        {
            key: 13,
            isHeader: false,
            content: [
                {
                    key: 0,
                    content: 'Puppeteer',
                },
                {
                    key: 1,
                    content: 'Headless browser E2E testing tool',
                },
                {
                    key: 2,
                    content: 'Runs on actual browser, API similar to Jest',
                },
                {
                    key: 3,
                    content: 'Only supports Chrome/Chromium',
                },
            ],
        },
        {
            key: 14,
            isHeader: false,
            content: [
                {
                    key: 0,
                    content: 'React Testing Library',
                },
                {
                    key: 1,
                    content: 'React DOM testing utility',
                },
                {
                    key: 2,
                    content: 'Test behaviour instead of implementation',
                },
                {
                    key: 3,
                    content: '',
                },
            ],
        },
        {
            key: 15,
            isHeader: false,
            content: [
                {
                    key: 0,
                    content: 'Vitest',
                },
                {
                    key: 1,
                    content: 'Unit test framework for vite',
                },
                {
                    key: 2,
                    content: '',
                },
                {
                    key: 3,
                    content: '',
                },
            ],
        },
    ],
};
