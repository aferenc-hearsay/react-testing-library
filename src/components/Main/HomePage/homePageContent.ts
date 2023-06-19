import { IPageContent } from '../../../types/interfaces';

export const homePageContent: IPageContent = {
    title: 'Testing React applications with Testing Library',
    articles: [
        {
            sequenceId: 0,
            articleTitle: '',
            sections: [
                {
                    sectionSequenceId: 0,
                    content:
                        '<p><strong><i>"The more your tests resemble the way your software is used, the more' +
                        ' confidence they can give you."</i></strong><br><span class="leftALigned"><i>Kent C. Dodds' +
                        '</i></span><p/>',
                },
            ],
        },
        {
            sequenceId: 1,
            articleTitle: 'Why and what should we test in our frontend (React) application?',
            sections: [
                {
                    sectionSequenceId: 0,
                    content: '<h3>Testing frontend apps generally</h3>',
                },
                {
                    sectionSequenceId: 1,
                    content:
                        '<p>It is not a question that we have to test our application. With accurate testing, ' +
                        'we can ensure it\'s working correctly, which helps us to deliver better products. Thorough ' +
                        'testing also helps us during development. Changing an existing piece of code might break ' +
                        'it completely. Good tests could help us find the problems during a modification or an ' +
                        'implementation of a new feature. Testing is also a key part of our CI/CD pipelines.</p>',
                },
                {
                    sectionSequenceId: 2,
                    content:
                        '<p>There are several things we should test generally. It is essential to ' +
                        'test our UI components rendering following our own and our users\' expectations. ' +
                        'It is also important to ensure that the business logic is precise and works well. These are ' +
                        'the basics, but there are more.</p>',
                },
                {
                    sectionSequenceId: 3,
                    content:
                        '<p>We also have to test accessibility. It\'s also cardinal, as there are ' +
                        'regulations about it, and it is also a business interest. It\'s not a question that there ' +
                        'are strong arguments in favor of testing security. Despite the browser wars calmed down, ' +
                        'the differences live with us, therefore we have to make attention to compatibility ' +
                        'issues. An application with a large user base should be tested for stress and performance' +
                        ' load. As a programmer, you often meet with unreadable code. Therefore, it is not strictly ' +
                        'a type of test we should also mention the code quality checks here.</p>',
                },
                {
                    sectionSequenceId: 4,
                    content:
                        '<p>You should identify priorities and what features you should test more ' +
                        'accurately. One good guideline is the business value of the features. You should also ' +
                        'identify the most used components of your application, and make attention to testing it. ' +
                        'Generally, also a good rule to test the thorough happy path, and write tests for edge ' +
                        'case scenarios.</p>',
                },
                {
                    sectionSequenceId: 5,
                    content:
                        '<p>We can say generally, that all the components of the testing pyramid should be used ' +
                        'in frontend applications. You should unit testing the micro components of the GUI, and ' +
                        'also the business logic behind them. For example, in the case of a form you should test the ' +
                        'behavior of a button, and also the validation logic of an input element. Integration tests ' +
                        'for the interactions of your components, and the behavior of your API are also ' +
                        'essential. End-to-end tests are unavoidable in a proper development process too. In the case ' +
                        'of frontend testing, there are also snapshot tests, which could ensure that the user ' +
                        'interface doesn\'t change unexpectedly. Last but not least it is necessary to mention ' +
                        'manual UI tests. It is really important as it will be a human, who will use the frontend ' +
                        'application.</p>',
                },
            ],
        },
        {
            sequenceId: 2,
            articleTitle: 'Test types in a React application',
            sections: [
                // {
                //     sectionSequenceId: 0,
                //     content: '<img src="/images/home/TestPyramid_frontend.png" alt="testing pyramid"/>',
                // },
                {
                    sectionSequenceId: 1,
                    content:
                        '<p>Let\'s see, what and how you could use the above ones in a React application. We will ' +
                        'talk about the unit tests, snapshot tests, integration tests, and a little bit about ' +
                        'visual and manual testing.</p>',
                },
                {
                    sectionSequenceId: 2,
                    content:
                        '<p>As not a real test type, I don\'t want to talk about code quality checks too much, but ' +
                        'I think, it is also important to use well-configured SonarQube, ESLint, Prettier, or even ' +
                        'TypeScript also have to mention here.</p>',
                },
                {
                    sectionSequenceId: 3,
                    content: '<h3>Unit tests</h3>',
                },
                {
                    sectionSequenceId: 4,
                    content:
                        '<p>Unit tests are the base of the testing pyramids. As these are testing elementary ' +
                        'components of an application, mainly short methods with low complexity, and short running ' +
                        'time. These are mainly written by developers. In our point of view, these are the most' +
                        ' important and more often used test types.<p/>',
                },
                {
                    sectionSequenceId: 5,
                    content:
                        '<p>Unit tests have to run isolated from each other, and can\'t modify the testing ' +
                        'environment. In a unit test, you should implement one or two assertations. Unit tests should ' +
                        'cover 70%-80% of your application logic.</p>',
                },
                {
                    sectionSequenceId: 6,
                    content:
                        '<p>As I mentioned above, the unit tests are small methods whose are testing small elements ' +
                        'of the component. In a React application, we should use them to test small components of the ' +
                        'DOM. And this is the most important point. We mainly test the DOM elements. The business ' +
                        'logic, the calculated values, and all of the other things are tested as it is rendered for ' +
                        'users. That is why, it ensures the automatic tests are as close to the end user as ' +
                        'possible. There is only one closer thing, which is manual testing.</p>',
                },
                {
                    sectionSequenceId: 7,
                    content:
                        '<p>You should say, that there is life under the DOM. That\'s true, and sometimes we should ' +
                        'implement test cases for testing logic under the hood. Sometimes it\'s also essential for ' +
                        'the application\'s proper behavior. For example, if your app generates an ID based on some ' +
                        'specific rule for processing needs, it is necessary to write tests to ensure that this ' +
                        'function works properly.</p>',
                },
                {
                    sectionSequenceId: 8,
                    content:
                        '<p>To summarize, you should write a unit test for your application\'s small UI elements and ' +
                        'logical segments. These tests should be as small as possible, with minimal complexity, and ' +
                        'last but not least unit tests should be as close to the rendered DOM (and the user) ' +
                        'as possible.</p>',
                },
                {
                    sectionSequenceId: 9,
                    content: '<h3>Snapshot tests<h4/>',
                },
                {
                    sectionSequenceId: 10,
                    content:
                        '<p>Snapshot tests, as it mentioned in their name, test the whole rendered section of our ' +
                        'application, for example, a React component. It compares against a referenced file, and ' +
                        'ensures, that the content rendering in the browser is always the same. Therefore, it can be ' +
                        'considered somewhat of an intermediate type between unit and integration tests depending on ' +
                        'the scope of the case. When you update your tested component, you have to update also your ' +
                        'referenced file. There are two main approaches to snapshot testing:</p>',
                },
                {
                    sectionSequenceId: 11,
                    content:
                        '<ul>' + '<li>Non-browser snapshot tests</li>' + '<li>Rendered snapshot tests</li>' + '</ul>',
                },
                {
                    sectionSequenceId: 12,
                    content: '<h4>Non-browser snapshot tests</h4>',
                },
                {
                    sectionSequenceId: 13,
                    content:
                        '<p>In a non-browser snapshot test, you can create a serializable value of the React DOM' +
                        ' tree with the react-test-renderer. Then, you should compare this output in a test with ' +
                        'the pre-defined JSON. The problem with this approach is that it is like, but not the same as ' +
                        'the user sees in the browser.</p>',
                },
                {
                    sectionSequenceId: 14,
                    content: '<h4>Rendered snapshot tests</h4>',
                },
                {
                    sectionSequenceId: 15,
                    content:
                        '<p>Rendered snapshot tests are more humane solutions. These are real image snapshots of ' +
                        'your application compared to the reference snapshot image. The comparison needs a lot of' +
                        'human effort and time, and in larger applications nearly unfeasible. There are some ' +
                        'opportunities to automatize this process.</p>',
                },
                {
                    sectionSequenceId: 16,
                    content: '<h3>Integration tests</h3>',
                },
                {
                    sectionSequenceId: 17,
                    content:
                        '<p>Integration tests ensure the two application modules (not only in the sense of React ' +
                        'Components) work well together. It is also used for testing the application\'s communication ' +
                        'with other parts of a system, for example, a backend server, a database, etc.</p>',
                },
                {
                    sectionSequenceId: 18,
                    content:
                        '<p>Implementation of an integration test is much more complicated, running the test cases ' +
                        'takes more time. That is why there are much fewer integration tests, than unit tests, and ' +
                        'it\'s not a problem.</p>',
                },
                {
                    sectionSequenceId: 19,
                    content: '<h3>E2E tests</h3>',
                },
                {
                    sectionSequenceId: 20,
                    content:
                        '<p>End-to-end tests as the name mention, test the whole application, as the user interacts ' +
                        'with it. The task is to ensure that all the elements of the system are working together ' +
                        'properly as the user interacts with it. It could be also manual or automated.</p>',
                },
                {
                    sectionSequenceId: 21,
                    content:
                        '<p>Manually testing the application, you should create a testing environment of all the ' +
                        'components of your system (database, frontend, backend), and somebody should go through the whole ' +
                        'React app step-by-step. It\'s time-consuming but unavoidable.</p>',
                },
                {
                    sectionSequenceId: 22,
                    content: '<p>There are also automated tools for E2E tests, for example Selenium, and Cypress.</p>',
                },
                {
                    sectionSequenceId: 23,
                    content: '<h3>Visual tests</h3>',
                },
                {
                    sectionSequenceId: 24,
                    content:
                        '<p>This is a category formed based on a bit different grouping, but concerning ' +
                        'React (and front-end) development, I feel important to talk about it separately. Most of ' +
                        'the tests are automated and code based, and far from the user. As we talked about it ' +
                        'earlier, we must strive to be as close to the end user as possible. We have to ensure, for ' +
                        'example, that our delete button is red everywhere, the select list is opening, etc. ' +
                        'Visually. We can do it trough a manual E2E test, but it\'s also possible while we develop. ' +
                        'For example with Storybook, we can test small fragments of our app visually.</p>',
                },
            ],
        },
        {
            sequenceId: 3,
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
    ],
};
