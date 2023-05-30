import React from 'react';
import { ITableRowFC } from '../../../../types/interfaces';
import styles from './TableRow.module.css';

export const TableRow: React.FC<ITableRowFC> = ({ isHeader, rowNumber, cells }) => {
    if (isHeader) {
        return (
            <tr>
                {cells.map(cell => {
                    return (
                        <th key={cell.key} className={styles.cell}>
                            {cell.content}
                        </th>
                    );
                })}
            </tr>
        );
    }
    return (
        <tr className={rowNumber % 2 == 0 ? styles.even : styles.odd}>
            {cells.map(cell => {
                return (
                    <td key={cell.key} className={styles.cell}>
                        {cell.content}
                    </td>
                );
            })}
        </tr>
    );
};
