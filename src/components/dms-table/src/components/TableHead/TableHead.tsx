import { useState } from 'react'
import '../../styles/table.scss'
import { columns } from '../../types/types'
import TableRow from '../TableRow/TableRow'

interface props {
  columns: columns[]
  handleSorting: any
}

function TableHead({ columns, handleSorting }: props) {

  const [sortField, setSortField] = useState("")
  const [order, setOrder] = useState("asc")

  function handleSortingChange(accessor: string): void {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc"
    setSortField(accessor)
    setOrder(sortOrder)
    handleSorting(accessor, sortOrder)
  }

  return (
    <thead>
      <TableRow>
        {columns.map(({ label, accessor, sortable, width }) => {
          const cl = sortable
            ? sortField === accessor && order === "asc"
              ? "up"
              : sortField === accessor && order === "desc"
                ? "down"
                : "default"
            : ""

          return (
            <th className={cl}
              style={{ width: `${width}px` }}
              key={accessor}
              onClick={sortable ? () => handleSortingChange(accessor) : undefined}
            >
              {label}
            </th>
          )
        })}
      </TableRow>
    </thead>
  )
}

export default TableHead
