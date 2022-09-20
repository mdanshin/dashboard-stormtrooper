import Chart from '../../components/chart/Chart'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import List from '../../components/table/Table'
import './single.scss'

function Single() {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://robohash.org/repudiandaeconsequaturqui.png?size=50x50&set=set1" alt="" className="itemImage" />
              <div className="details">
                <h1 className="itemTitle">John Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">johndoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+7 903 123 45 67</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Moscow, Kremlin, 1</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Russian Federation</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart height={200} title={"User Spending (Last 6 Months)"} />
          </div>
        </div>
        <div className="bottom">
          <h1 className='title'>Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single