import { Table } from '../../Atomic/Table';
import { toolsTable } from './toolsPageContent';

export const ToolsPage = () => {
    return (
        <>
            <h3>{toolsTable.description}</h3>
            <Table table={toolsTable} />
        </>
    );
};
