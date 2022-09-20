import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function List() {

  const rows = [{
    "id": 1,
    "product": "Flavouring - Raspberry",
    "avatar": "https://robohash.org/repudiandaeconsequaturqui.png?size=50x50&set=set1",
    "customer": "Jillayne Crossley",
    "date": "10/21/2021",
    "amount": 16,
    "method": "Point",
    "status": "false"
  }, {
    "id": 2,
    "product": "Bread Base - Italian",
    "avatar": "https://robohash.org/utaperiamvoluptas.png?size=50x50&set=set1",
    "customer": "Andreas Shedd",
    "date": "9/10/2022",
    "amount": 4,
    "method": "Plaza",
    "status": "true"
  }, {
    "id": 3,
    "product": "Pastry - Carrot Muffin - Mini",
    "avatar": "https://robohash.org/earumnihilsoluta.png?size=50x50&set=set1",
    "customer": "Lance Putten",
    "date": "1/29/2022",
    "amount": 20,
    "method": "Avenue",
    "status": "false"
  }, {
    "id": 4,
    "product": "Trout Rainbow Whole",
    "avatar": "https://robohash.org/quosedassumenda.png?size=50x50&set=set1",
    "customer": "Valenka Lawrenz",
    "date": "4/6/2022",
    "amount": 26,
    "method": "Lane",
    "status": "false"
  }, {
    "id": 5,
    "product": "Carbonated Water - Cherry",
    "avatar": "https://robohash.org/magniutvoluptatum.png?size=50x50&set=set1",
    "customer": "Ritchie Trudgeon",
    "date": "7/22/2022",
    "amount": 37,
    "method": "Alley",
    "status": "false"
  }
  ]

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell className='tableCell'>{row.id}</TableCell>
              <TableCell className='tableCell'>
                <div className="cellWrapper">
                  <img src={row.avatar} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List