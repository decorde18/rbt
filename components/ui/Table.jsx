// ============================================
// components/ui/Table.jsx
// ============================================
// USAGE:
// const columns = [
//   { key: 'name', label: 'Name' },
//   { key: 'email', label: 'Email' },
//   { key: 'role', label: 'Role', render: (val) => <Badge>{val}</Badge> },
//   { key: 'actions', label: 'Actions', sortable: false, render: (_, row) => (
//     <Button size="sm" onClick={() => handleEdit(row)}>Edit</Button>
//   )}
// ];

// const data = [
//   { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
//   { name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
// ];

// <Table
//   columns={columns}
//   data={data}
//   striped
//   sortable
//   onRowClick={(row) => console.log(row)}
// />

import { cn } from "@/lib/utils";
import { tableDefaults, tableVariants } from "@/lib/componentConfig";
import { useState } from "react";

const Table = ({
  variant = tableDefaults.variant,
  size = tableDefaults.size,
  className,
  striped = false,
  hoverable = true,
  sortable = false,
  data = [],
  columns = [],
  onRowClick,
  ...props
}) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const variantStyles = tableVariants.variant[variant];

  const handleSort = (key) => {
    if (!sortable) return;

    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aVal = a[sortConfig.key];
    const bVal = b[sortConfig.key];

    if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className='w-full overflow-x-auto'>
      <table
        className={cn(tableDefaults.base, tableVariants.size[size], className)}
        style={{ borderColor: variantStyles.borderColor }}
        {...props}
      >
        <thead>
          <tr
            style={{
              backgroundColor: tableDefaults.headerBg,
              color: tableDefaults.headerText,
            }}
          >
            {columns
              .filter((column) => !column.hideColumn)
              .map((column, idx) => (
                <th
                  key={idx}
                  className={cn(
                    "px-4 py-3 text-left font-semibold",
                    sortable && column.sortable !== false && "cursor-pointer"
                  )}
                  style={{
                    ...(sortable &&
                      column.sortable !== false && {
                        ":hover": { opacity: 0.9 },
                      }),
                  }}
                  onClick={() =>
                    column.sortable !== false && handleSort(column.key)
                  }
                >
                  <div className='flex items-center gap-2'>
                    {column.label}
                    {sortable && column.sortable !== false && (
                      <span className='text-xs'>
                        {sortConfig.key === column.key
                          ? sortConfig.direction === "asc"
                            ? "↑"
                            : "↓"
                          : "↕"}
                      </span>
                    )}
                  </div>
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className={cn("border-b", onRowClick && "cursor-pointer")}
              style={{
                borderColor: tableDefaults.borderColor,
                ...(striped &&
                  rowIdx % 2 === 1 && {
                    backgroundColor: tableDefaults.stripedRowBg,
                  }),
              }}
              onMouseEnter={(e) =>
                hoverable &&
                (e.currentTarget.style.backgroundColor =
                  tableDefaults.rowHoverBg)
              }
              onMouseLeave={(e) =>
                hoverable &&
                (e.currentTarget.style.backgroundColor =
                  striped && rowIdx % 2 === 1
                    ? tableDefaults.stripedRowBg
                    : "transparent")
              }
              onClick={() => onRowClick && onRowClick(row)}
            >
              {columns
                .filter((column) => !column.hideColumn)
                .map((column, colIdx) => (
                  <td key={colIdx} className='px-4 py-3'>
                    {column.render
                      ? column.render(row[column.key], row)
                      : row[column.key]}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
