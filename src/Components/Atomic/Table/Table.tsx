import { TableBody } from './TableBody/TableBody';
import { TableHeader } from './TableHeader/TableHeader';
import { ITableFC } from '../../../types/interfaces';
import React from 'react';
import styles from './Table.module.css';

export const Table: React.FC<ITableFC> = ({ table }) => {
    const headerRow = table.rows.filter(row => row.isHeader);
    return (
        <table className={styles.table}>
            {headerRow.length > 0 && <TableHeader cells={headerRow[0].content} />}
            <TableBody rows={table.rows.filter(row => !row.isHeader)} />
        </table>
    );
};
