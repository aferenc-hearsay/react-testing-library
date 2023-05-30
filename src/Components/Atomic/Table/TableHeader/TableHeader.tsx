import { TableRow } from '../TableRow/TableRow';
import React from 'react';
import { ITableHeaderFC } from '../../../../types/interfaces';
import styles from './TableHeader.module.css';

export const TableHeader: React.FC<ITableHeaderFC> = ({ cells }) => {
    return (
        <thead className={styles.header}>
            <TableRow isHeader={true} rowNumber={0} cells={cells} />
        </thead>
    );
};
