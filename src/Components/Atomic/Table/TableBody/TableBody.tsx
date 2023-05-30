import React from 'react';
import { ITableBodyFC } from '../../../../types/interfaces';
import { TableRow } from '../TableRow/TableRow';

export const TableBody: React.FC<ITableBodyFC> = ({ rows }) => {
    return (
        <tbody>
            {rows.map(row => {
                return <TableRow key={row.key} rowNumber={row.key} cells={row.content} />;
            })}
        </tbody>
    );
};
