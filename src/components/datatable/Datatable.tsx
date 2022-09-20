import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid'
import { userColumns, userRows } from '../../datatablesource'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import DeleteButton from '../button/DeleteButton'

function Datatable() {

  const [data, setData] = useState(userRows)

  function handleDelete(id: any) {
    setData(data.filter(item => item.id !== id))
  }

  const actionColumn = [
    {
      field: "action", headerName: "Action", width: 200, renderCell: (params: any) => {
        return (
          <div className='cellAction'>
            <Link to='/users/test' style={{ textDecoration: "none" }} >
              <div className="viewButton">View</div>
            </Link>
            <DeleteButton onClick={() => handleDelete(params.row.id)} />
          </div>
        )
      }
    }
  ]

  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add New User
        <Link to='/users/new' style={{ textDecoration: "none" }} className={"link"} >
          Add New
        </Link>
      </div>
      <DataGrid
        className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={15}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable
