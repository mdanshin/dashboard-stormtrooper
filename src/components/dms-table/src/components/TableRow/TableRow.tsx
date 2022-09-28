interface props {
  key?: any
  children: any
}

function TableRow({children, key}: props) {
  return (
    <tr key={key}>{children}</tr>
  )
}

export default TableRow