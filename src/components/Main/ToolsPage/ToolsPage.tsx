import { Table } from '../../atomic/Table';
import { toolsTable, toolsPageContent } from './toolsPageContent';
import { Article } from '../../atomic/Article';

export const ToolsPage = () => {
    return (
        <>
            <h1>{toolsPageContent.title}</h1>
            {toolsPageContent.articles.map(article => {
                return <Article key={article.sequenceId} article={article} />;
            })}
            <h3>{toolsTable.description}</h3>
            <Table table={toolsTable} />
        </>
    );
};
