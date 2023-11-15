import React, { useEffect, useState } from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

const Widget = ({ type }) => {
  const [amount, setAmount] = useState(null)
  const [diff, setDiff] = useState(null) // Added 'diff' state

  let data

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: (
          <PersonOutlineIcon
            className='icon'
            style={{ color: 'crimson', backgroundColor: 'rgba(255,0,0,0.2)' }}
          />
        ),
      }
      break
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all orders',
        icon: (
          <ShoppingCartIcon
            className='icon'
            style={{
              color: 'goldenrod',
              backgroundColor: 'rgba(218,165,32,0.2)',
            }}
          />
        ),
      }
      break
    case 'earning':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'View net earnings',
        icon: (
          <MonetizationOnIcon
            className='icon'
            style={{ backgroundColor: 'rgba(0, 128, 0, 0.2)', color: 'green' }}
          />
        ),
      }
      break
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See all details',
        icon: (
          <AccountBalanceWalletIcon
            className='icon'
            style={{
              backgroundColor: 'rgba(128, 0, 128, 0.2)',
              color: 'purple',
            }}
          />
        ),
      }
      break
    default:
      break
  }

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date()
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1))
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 1))

      const lastMonthQuery = query(
        collection(db, 'users'),
        where('timeStamp', '<=', today),
        where('timeStamp', '>', lastMonth)
      )
      const prevMonthQuery = query(
        collection(db, 'users'),
        where('timeStamp', '<=', lastMonth),
        where('timeStamp', '>', prevMonth)
      )

      const lastMonthData = await getDocs(lastMonthQuery)
      const prevMonthData = await getDocs(prevMonthQuery)

      setAmount(lastMonthData.docs.length)

      // Set a value for 'diff' based on your logic
      // For example, calculate the difference between lastMonthData and prevMonthData
      // and set it to 'diff'
      // setDiff(yourCalculatedValue);
    }

    fetchData()
  }, [])

  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>
          {data.isMoney && '$'} {amount}
        </span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
