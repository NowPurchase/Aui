import React from 'react';
import './style.scss';
interface AuiTableProps<TData> {
    data: TData[];
    columns: {
        header: string;
        id: string;
        cell: (row: TData) => React.ReactNode;
        visible?: boolean;
        width?: string;
    }[];
    onRowClick?: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, row: TData) => void;
    getRowId: (row: TData) => string;
}
declare const AuiTable: <TData extends {
    id: string;
}>({ data, columns, onRowClick, getRowId, }: AuiTableProps<TData>) => React.JSX.Element;
export default AuiTable;
