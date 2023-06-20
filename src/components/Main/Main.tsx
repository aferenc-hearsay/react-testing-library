import React from 'react';
import { IMainFC } from '../../types/interfaces';
import { ROUTES } from '../../constants';
import { HomePage } from './HomePage';
import { ToolsPage } from './ToolsPage';
import { TestingLibraryPage } from './TestingLibraryPage';
import { TestingMaterialsPage } from './TestingMaterialsPage';
import { ESLintTestingLibraryPage } from './ESLintTestingLibraryPage';

export const Main: React.FC<IMainFC> = ({ type }) => {
    switch (type) {
        case ROUTES[0].type:
            return <HomePage />;
        case ROUTES[1].type:
            return <ToolsPage />;
        case ROUTES[2].type:
            return <TestingLibraryPage />;
        case ROUTES[3].type:
            return <ESLintTestingLibraryPage />;
        case ROUTES[4].type:
            return <TestingMaterialsPage />;
        default:
            return <></>;
    }
};
