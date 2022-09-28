import '../../styles/table.scss'
import { columns } from '../../types/types'
import TableRow from '../TableRow/TableRow'

interface props {
  tableData?: any
  columns: columns[]
}

function TableBody({ tableData, columns }: props) {
  return (
    <tbody>
      {tableData.map((data: any) => {
        console.log(data);

        return (
          <TableRow key={data.id}>
            <td>{data.id}</td>
            <td className='cellWrapper'>
              <img src={data.avatar} alt="" className="image" />
              {data.full_name}
            </td>
            <td>{data.email}</td>
            <td>{data.gender}</td>
            <td>{data.age}</td>
            <td>{data.start_date}</td>
            <td>
              <span className={`status ${data.status}`}>{data.status}</span>
            </td>
          </TableRow>
        )
      })}
    </tbody>
  )
}

export default TableBody