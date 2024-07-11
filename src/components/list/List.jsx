import React from 'react'
import Userinfo from './userinfo/Userinfo'
import Chatlist from './chatlist/Chatlist'
import './list.css'

function List() {
  return (
    <div className='list'>
        <Userinfo/>
        <Chatlist/>
    </div>
  )
}

export default List