import { IArticle, ITable } from '../../../types/interfaces';

export const testingLibraryPageTitle = 'React Testing Library';

export const testingLibraryPageContent: { general: IArticle; queries: ITable; priority: IArticle; roles: IArticle } = {
    general: {
        sequenceId: 0,
        articleTitle: 'Conceptions of the Testing Library',
        sections: [
            {
                sectionSequenceId: 0,
                content:
                    '<p><a href="https://testing-library.com/" target="_blank">Testing Library</a> is for ' +
                    'testing rendered DOM instead of component instances. The concept is to test the ' +
                    'application as the user would use it. The developers tried to create a simple and flexible ' +
                    'API.<p/>',
            },
            {
                sectionSequenceId: 1,
                content:
                    '<p>The library encourages you to avoid testing implementation details, like the internals of ' +
                    'components. However, you can\'t access your component instances and methods in your ' +
                    'test cases, you have to work with the real DOM elements rendering in the browser. This ' +
                    'mindset helps you to create tests that are closer to the end user, and at the same time, ' +
                    'it is an effective way to test UI.<p/>',
            },
            {
                sectionSequenceId: 2,
                content: '<p>You may have to avoid testing the following details:<p/>',
            },
            {
                sectionSequenceId: 3,
                content:
                    '<ol>' +
                    '<li>The internal state of a component</li>' +
                    '<li>Internal methods of a component</li>' +
                    '<li>Lifecycle methods of a component</li>' +
                    '<li>Child components</li>' +
                    '<ol/>',
            },
        ],
    },
    queries: {
        description: 'Summary of query types',
        rows: [
            {
                key: 0,
                isHeader: true,
                content: [
                    {
                        key: 0,
                        content: 'Type of Query',
                    },
                    {
                        key: 1,
                        content: '0 Matches',
                    },
                    {
                        key: 2,
                        content: '1 Match',
                    },
                    {
                        key: 3,
                        content: '>1 Matches',
                    },
                    {
                        key: 4,
                        content: 'Retry (Async/Await)',
                    },
                ],
            },
            {
                key: 1,
                isHeader: false,
                content: [
                    {
                        key: 0,
                        content: 'Single element',
                    },
                    {
                        key: 1,
                        content: '',
                    },
                    {
                        key: 2,
                        content: '',
                    },
                    {
                        key: 3,
                        content: '',
                    },
                    {
                        key: 4,
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
                        content: 'getBy...',
                    },
                    {
                        key: 1,
                        content: 'Throw error',
                    },
                    {
                        key: 2,
                        content: 'Return element',
                    },
                    {
                        key: 3,
                        content: 'Throw error',
                    },
                    {
                        key: 4,
                        content: 'No',
                    },
                ],
            },
            {
                key: 3,
                isHeader: false,
                content: [
                    {
                        key: 0,
                        content: 'queryBy...',
                    },
                    {
                        key: 1,
                        content: 'Return null',
                    },
                    {
                        key: 2,
                        content: 'Return element',
                    },
                    {
                        key: 3,
                        content: 'Throw error',
                    },
                    {
                        key: 4,
                        content: 'No',
                    },
                ],
            },
            {
                key: 4,
                isHeader: false,
                content: [
                    {
                        key: 0,
                        content: 'findBy...',
                    },
                    {
                        key: 1,
                        content: 'Throw error',
                    },
                    {
                        key: 2,
                        content: 'Return element',
                    },
                    {
                        key: 3,
                        content: 'Throw error',
                    },
                    {
                        key: 4,
                        content: 'Yes',
                    },
                ],
            },
            {
                key: 5,
                isHeader: false,
                content: [
                    {
                        key: 0,
                        content: 'Multiple Elements',
                    },
                    {
                        key: 1,
                        content: '',
                    },
                    {
                        key: 2,
                        content: '',
                    },
                    {
                        key: 3,
                        content: '',
                    },
                    {
                        key: 4,
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
                        content: 'getAllBy...',
                    },
                    {
                        key: 1,
                        content: 'Throw error',
                    },
                    {
                        key: 2,
                        content: 'Return array',
                    },
                    {
                        key: 3,
                        content: 'Return array',
                    },
                    {
                        key: 4,
                        content: 'No',
                    },
                ],
            },
            {
                key: 7,
                isHeader: false,
                content: [
                    {
                        key: 0,
                        content: 'queryAllBy...',
                    },
                    {
                        key: 1,
                        content: 'Return []',
                    },
                    {
                        key: 2,
                        content: 'Return array',
                    },
                    {
                        key: 3,
                        content: 'Return array',
                    },
                    {
                        key: 4,
                        content: 'No',
                    },
                ],
            },
            {
                key: 8,
                isHeader: false,
                content: [
                    {
                        key: 0,
                        content: 'findAllBy',
                    },
                    {
                        key: 1,
                        content: 'Throw error',
                    },
                    {
                        key: 2,
                        content: 'Return array',
                    },
                    {
                        key: 3,
                        content: 'Return array',
                    },
                    {
                        key: 4,
                        content: 'Yes',
                    },
                ],
            },
        ],
    },
    priority: {
        sequenceId: 1,
        articleTitle: 'Priority of queries',
        sections: [
            {
                sectionSequenceId: 0,
                content: '<h3>Queries accessible for everyone</h3>',
            },
            {
                sectionSequenceId: 1,
                content: '<h4>1. ...ByRole</h4>',
            },
            {
                sectionSequenceId: 2,
                content:
                    '<p>Query an element that is exposed in the accessibility tree. With the name option you can ' +
                    'filter the returned elements by accessible name. For example, in an \'OK\' button, the name is' +
                    '\'OK\'. Often, we should use this with the name option like this: <code>getByRole(\'button\', ' +
                    '{name: /submit/i})</code></p>',
            },
            {
                sectionSequenceId: 3,
                content: '<p>Options for refine the query:</p>',
            },
            {
                sectionSequenceId: 4,
                content:
                    '<ul>' +
                    '<li>hidden</li>' +
                    '<li>name</li>' +
                    '<li>description</li>' +
                    '<li>selected</li>' +
                    '<li>busy</li>' +
                    '<li>checked</li>' +
                    '<li>pressed</li>' +
                    '<li>suggest</li>' +
                    '<li>current</li>' +
                    '<li>expanded</li>' +
                    '<li>queryFallbacks</li>' +
                    '<li>level</li>' +
                    '<li><ul>' +
                    '<li>min</li>' +
                    '<li>max</li>' +
                    '<li>now</li>' +
                    '<li>text</li>' +
                    '</ul></li>' +
                    '</ul>',
            },
            {
                sectionSequenceId: 5,
                content: '<h4>2. ...ByLabelText</h4>',
            },
            {
                sectionSequenceId: 6,
                content: '<p>This could be used on form labels, as its name mentions.</p>',
            },
            {
                sectionSequenceId: 7,
                content: '<h4>3. ...ByPlaceHolderText</h4>',
            },
            {
                sectionSequenceId: 8,
                content: '<p>If nothing more.</p>',
            },
            {
                sectionSequenceId: 9,
                content: '<h4>4. ...ByText</h4>',
            },
            {
                sectionSequenceId: 10,
                content: '<p>For non-interactive elements, like divs, spans, paragraphs, etc.</p>',
            },
            {
                sectionSequenceId: 11,
                content: '<h4>5. ...ByDisplayValue</h4>',
            },
            {
                sectionSequenceId: 12,
                content:
                    '<p>The current value of a form element. Useful when navigating on a page with filled-in values</p>',
            },
            {
                sectionSequenceId: 13,
                content: '<h3>Semantic queries</h3>',
            },
            {
                sectionSequenceId: 14,
                content: '<h4>1. ...ByAltText</h4>',
            },
            {
                sectionSequenceId: 15,
                content: '<p>Query for elements with alt-text attribute, like img, area, input.</p>',
            },
            {
                sectionSequenceId: 16,
                content: '<h4>2. ...ByTitle</h4>',
            },
            {
                sectionSequenceId: 17,
                content: '<p>Title attribute not consistently read by screen readers and not visible by default.</p>',
            },
            {
                sectionSequenceId: 18,
                content: '<h3>Test IDs</h3>',
            },
            {
                sectionSequenceId: 19,
                content: '<h4>1. ...ByTestId</h4>',
            },
            {
                sectionSequenceId: 20,
                content:
                    '<p>Not recommended. If your element is correct semantically, you don\'t have to use it too ' +
                    'often. You have to add an unecessary tag to your element, just for testing purposes. Altough ' +
                    'there is a data-test removal tool: babel-plugin-jsx-remove-data-test-id.</p>',
            },
        ],
    },
    roles: {
        sequenceId: 2,
        articleTitle: 'Roles of semantic HTML elements',
        sections: [
            {
                sectionSequenceId: 0,
                content:
                    '<ul>' +
                    '<li>' +
                    '<a href="https://www.w3.org/TR/html-aria/#docconformance" target="_blank">' +
                    'HTML element roles' +
                    '</a>' +
                    '</li>' +
                    '<li>' +
                    '<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#roles" target="_blank">' +
                    'Aria roles' +
                    '</a>' +
                    '</li>' +
                    '</ul>',
            },
        ],
    },
};
