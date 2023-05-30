import { Table } from '../../Atomic/Table';
import { testingLibraryPageContent } from './testingLibraryPageContent';
import { Article } from '../../Atomic/Article';

export const TestingLibraryPage = () => {
    return (
        <>
            <h2>{testingLibraryPageContent.queries.description}</h2>
            <Table table={testingLibraryPageContent.queries} />
            <Article article={testingLibraryPageContent.priority} />
            <Article article={testingLibraryPageContent.roles} />
        </>
    );
};
