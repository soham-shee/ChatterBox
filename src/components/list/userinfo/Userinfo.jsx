import React from 'react'
import './userinfo.css'
import { useUserStore } from '../../../config/userStore'


function Userinfo() {
  const {currentUser} = useUserStore()
  const URL="https://ui-avatars.com/api/?name="
  return (
    <div className='userinfo'>
        <div className="user">
            <img src={currentUser.avatar || "./avatar.png"} alt="" />
            <h3>{currentUser.username}</h3>
        </div>
        <div className="icons">
            <img src="./more.png" alt="" />
            <img src="./edit.png" alt="" />
        </div>
    </div>
  )
}

export default Userinfo