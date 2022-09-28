import './styles/table.scss'
import TableBody from './components/TableBody/TableBody'
import { columns } from './types/types'
import { useSortableTable } from "./hooks/useSortableTable";
import TableHead from './components/TableHead/TableHead';

interface props {
  caption?: string
  columns: columns[]
  data?: any
}

function Table({ caption, columns, data }: props) {
  const [tableData, handleSorting] = useSortableTable(data, columns);

  return (
    <table className='dms-table'>
      <caption>{caption}</caption>
      <TableHead columns={columns} handleSorting={handleSorting} />
      <TableBody columns={columns} tableData={tableData} />
    </table>
  )
}

export default Table