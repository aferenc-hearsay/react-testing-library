import { IRoute } from '../types/interfaces';

export const ROUTES: IRoute[] = [
    {
        id: 0,
        value: '/',
        title: 'Testing in general',
        type: 'home',
    },
    {
        id: 1,
        value: 'tools',
        title: 'Testing tools',
        type: 'tools',
    },
    {
        id: 2,
        value: 'testing-library',
        title: 'Testing Library',
        type: 'testingLibrary',
    },
    {
        id: 3,
        value: 'eslint-testing-library',
        title: 'ESLint Testing Library',
        type: 'eslintTestingLibrary',
    },
    {
        id: 4,
        value: 'test-materials',
        title: 'Test Materials',
        type: 'testMaterials',
    },
];
