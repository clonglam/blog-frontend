import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table"
import * as React from "react"
import { FaSortDown, FaSortUp } from "react-icons/fa"

// import TablePaginationAction from '../../utils/TablePagination'

export type DataTableProps<Data extends object> = {
    data: Data[]
    columns: ColumnDef<Data, any>[]
    columnVisibility?: VisibilityState
}

function Table<T>({
    data,
    columns,
    columnVisibility = {},
}: {
    data: T[]
    columns: ColumnDef<T, any>[]
    columnVisibility?: VisibilityState
}) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
            columnVisibility,
            sorting,
        },
    })
    return (
        <table>
            <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => {
                            // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                            // const meta: any = header.column.columnDef.meta
                            return (
                                <th
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                    // isNumeric={meta?.isNumeric}
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                    <span className="pl-4">
                                        {header.column.getIsSorted() ? (
                                            header.column.getIsSorted() ===
                                            "desc" ? (
                                                <FaSortDown
                                                    aria-label="sorted descending"
                                                    style={{
                                                        display: "inline",
                                                    }}
                                                />
                                            ) : (
                                                <FaSortUp
                                                    aria-label="sorted ascending"
                                                    style={{
                                                        display: "inline",
                                                    }}
                                                />
                                            )
                                        ) : null}
                                    </span>
                                </th>
                            )
                        })}
                    </tr>
                ))}
            </thead>

            <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map(cell => {
                            // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                            // const meta: any = cell.column.columnDef.meta
                            return (
                                <td key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            )
                        })}
                    </tr>
                ))}
            </tbody>

            {/* <TablePaginationAction table={table} /> */}
        </table>
    )
}

export default Table
