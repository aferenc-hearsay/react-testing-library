import { Table } from '../../atomic/Table';
import { testingLibraryPageContent, testingLibraryPageTitle } from './testingLibraryPageContent';
import { Article } from '../../atomic/Article';

export const TestingLibraryPage = () => {
    return (
        <>
            <h1>{testingLibraryPageTitle}</h1>
            <Article article={testingLibraryPageContent.general} />
            <h2>{testingLibraryPageContent.queries.description}</h2>
            <Table table={testingLibraryPageContent.queries} />
            <Article article={testingLibraryPageContent.priority} />
            <Article article={testingLibraryPageContent.roles} />
        </>
    );
};
