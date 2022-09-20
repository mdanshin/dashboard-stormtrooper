import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import StorageIcon from '@mui/icons-material/Storage'
import GroupIcon from '@mui/icons-material/Group'
import WebIcon from '@mui/icons-material/Web'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext'
import { useContext } from 'react'


function Sidebar() {

  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className="sidebar">
      <div className="top">
        <Link to='/' style={{ textDecoration: "none" }} >
          <span className="logo">DMS Admin Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className="title">CMDB</p>
          <Link to='/servers' style={{ textDecoration: "none" }} >
            <li>
              <StorageIcon className='icon' />
              <span>Servers</span>
            </li>
          </Link>
          <Link to='/users' style={{ textDecoration: "none" }} >
            <li>
              <GroupIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>
          <Link to='/sites' style={{ textDecoration: "none" }} >
            <li>
              <WebIcon className='icon' />
              <span>Sites</span>
            </li>
          </Link>
          <p className="title">SYSTEM</p>
          <li>
            <QueryStatsIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className='icon' />
            <span>Notifications</span>
          </li>
          <li>
            <MonitorHeartIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <ManageSearchIcon className='icon' />
            <span>Logs</span>
          </li>

          <li>
            <SettingsIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className="title">UTILS</p>
          <li>
            <VpnKeyIcon className='icon' />
            <span>Password Generator</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
        <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
      </div>
    </div>
  )
}

export default Sidebar