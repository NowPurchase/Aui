import React, { useState } from 'react';
import './style.scss'; // Verify CSS module setup

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

const AuiTable = <TData extends { id: string }>({
  data = [],
  columns = [],
  onRowClick = () => {},
  getRowId = (row) => row.id,
}: AuiTableProps<TData>) => {

  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  const visibleColumns = columns.filter(({ visible = true }) => visible);
  
  return (
    <table>
      <thead>
        <tr>
          {visibleColumns.map((col) => (
            <th style={{ width: col.width }} key={col.id}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          const uniqueRowId = getRowId(row)
          return <tr
            onMouseEnter={() => setHoveredRow(uniqueRowId)}
            onMouseLeave={() => setHoveredRow(null)}
            key={uniqueRowId}
            onClick={(e) => onRowClick(e, row)}
            className='hoverable-row'
          >
            {visibleColumns.map((col) => (
              <td style={{ width: col.width }} key={col.id}>{col.cell({...row, hover : hoveredRow})}</td>
            ))}
          </tr>
        })}
      </tbody>
    </table>
  );
};

export default AuiTable;