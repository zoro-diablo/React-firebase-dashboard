import React, { useContext } from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search'
import LanguageIcon from '@mui/icons-material/Language'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import ListIcon from '@mui/icons-material/List'
import { DarkModeContext } from '../../context/darkModeContenxt'

const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext)
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...' />
          <SearchIcon className='icon' />
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageIcon className='icon' />
            English
          </div>
          <div className='item'>
            <DarkModeIcon className='icon' onClick={()=>dispatch({type:'TOGGLE'})}/>
          </div>
          <div className='item'>
            <FullscreenIcon className='icon' />
          </div>
          <div className='item'>
            <NotificationsOffIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleIcon className='icon' />
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <ListIcon className='icon' />
          </div>

          <div className='item'>
            <img
              src='https://avatars.githubusercontent.com/u/68209800?v=4'
              alt=''
              className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
