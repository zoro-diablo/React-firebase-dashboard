import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Inventory2Icon from '@mui/icons-material/Inventory2'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import SettingsIcon from '@mui/icons-material/Settings'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContenxt'

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>Z-Admin</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <span className='menu-icon'>
              <div className='icon'>
                <DashboardIcon />
              </div>
              <div className='menu-name'>Dashboard</div>
            </span>
          </li>
          <p className='title'>LISTS</p>
          <Link to='/users' style={{ textDecoration: 'none' }}>
            <li>
              <span className='menu-icon'>
                <div className='icon'>
                  <PermIdentityIcon />
                </div>
                <div className='menu-name'>Users</div>
              </span>
            </li>
          </Link>
          <Link to='/products' style={{ textDecoration: 'none' }}>
            <li>
              <span className='menu-icon'>
                <div className='icon'>
                  <Inventory2Icon />
                </div>
                <div className='menu-name'>Products</div>
              </span>
            </li>
          </Link>
          <li>
            <span className='menu-icon'>
              <div className='icon'>
                <ShoppingBagIcon />
              </div>
              <div className='menu-name'>Orders</div>
            </span>
          </li>
          <p className='title'>USEFUL</p>

          <li>
            <span className='menu-icon'>
              <div className='icon'>
                <QueryStatsIcon />
              </div>
              <div className='menu-name'>Stats</div>
            </span>
          </li>
          <li>
            <span className='menu-icon'>
              <div className='icon'>
                <CircleNotificationsIcon />
              </div>
              <div className='menu-name'>Notification</div>
            </span>
          </li>
          <p className='title'>SERVICE</p>

          <li>
            <span className='menu-icon'>
              <div className='icon'>
                <HealthAndSafetyIcon />
              </div>
              <div className='menu-name'>System Health</div>
            </span>
          </li>
          <li>
            <span className='menu-icon'>
              <div className='icon'>
                <LibraryBooksIcon />
              </div>
              <div className='menu-name'>Logs</div>
            </span>
          </li>
          <li>
            <span className='menu-icon'>
              <div className='icon'>
                <SettingsIcon />
              </div>
              <div className='menu-name'>Settings</div>
            </span>
          </li>
          <p className='title'>USER </p>

          <li>
            <span className='menu-icon'>
              <div className='icon'>
                <AccountCircleIcon />
              </div>
              <div className='menu-name'>Profile</div>
            </span>
          </li>
          <li>
            <span className='menu-icon'>
              <div className='icon'>
                <LogoutIcon />
              </div>
              <div className='menu-name'>Logout</div>
            </span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div
          className='colorOptions'
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className='colorOptions'
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar
