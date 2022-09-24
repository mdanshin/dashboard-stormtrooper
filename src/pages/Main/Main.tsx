import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import { Table } from 'dms-table'
import { columns, data } from '../../mock/tableSource'
import './main.scss'

function Main() {

  return (
    <div className="main">
      <Sidebar />
      <div className="mainContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="server" />
          <Widget type="user" />
          <Widget type="site" />
        </div>
        <div className="charts">
          <Featured />
          <Chart height={300} title={"Last 6 Months"} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table columns={columns} data={data} />
        </div>
      </div>
    </div>
  )
}

export default Main