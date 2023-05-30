import { MouseEventHandler } from 'react';

export interface IRoute {
    id: number;
    value: string;
    title: string;
    type: string;
}

export interface ISection {
    sectionSequenceId: number;
    content: string;
}

export interface IArticle {
    sequenceId: number;
    articleTitle: string;
    sections: ISection[];
}

export interface IPageContent {
    title: string;
    articles: IArticle[];
}

export interface ITableCell {
    key: number;
    content: string | number;
}

export interface ITableRow {
    key: number;
    isHeader: boolean;
    content: ITableCell[];
}

export interface ITable {
    description: string;
    rows: ITableRow[];
}

export interface INavigationBarFC {
    routes: IRoute[];
}

export interface IMainFC {
    type: string;
}

export interface IArticleFC {
    article: IArticle;
}

export interface ISectionFC {
    section: ISection;
}

export interface ITableFC {
    table: ITable;
}

export interface ITableBodyFC {
    rows: ITableRow[];
}

export interface ITableRowFC {
    isHeader?: boolean;
    rowNumber: number;
    cells: ITableCell[];
}

export interface ITableHeaderFC {
    cells: ITableCell[];
}

export interface IPaginationFC {
    totalPages: number;
    currentPage: number;
    onPageChange: MouseEventHandler<HTMLButtonElement>;
    truncationLimit: number;
    visiblePageRange: number;
}

export interface IPageNumbersFC {
    firstPageNumberToShow: number;
    numberOfPages: number;
    currentPage: number;
    onPageChange: MouseEventHandler<HTMLButtonElement>;
}

export interface IPagerButtonFC {
    page: number;
    onPageChange: MouseEventHandler<HTMLButtonElement>;
}
