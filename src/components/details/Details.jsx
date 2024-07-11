import React from 'react'
import './details.css'
import { auth } from '../../config/firebase'

function Details() {
  const URL="https://ui-avatars.com/api/?name="
  return (
    <div className='details'>
      <div className="user">
      <img src={URL+"soham"} alt="" />
        <h3>Soham Shee</h3>
        <p>Description</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowUp.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://cdn.pixabay.com/photo/2024/04/19/04/39/kingfisher-8705377_1280.jpg" alt="" />
                <span>photo.png</span>
              </div>
              <img src="./download.png" className="icon" alt="" />
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://cdn.pixabay.com/photo/2024/04/19/04/39/kingfisher-8705377_1280.jpg" alt="" />
                <span>photo.png</span>
              </div>
              <img src="./download.png" className="icon"alt="" />
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://cdn.pixabay.com/photo/2024/04/19/04/39/kingfisher-8705377_1280.jpg" alt="" />
                <span>photo.png</span>
              </div>
              <img src="./download.png" className="icon"alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://cdn.pixabay.com/photo/2024/04/19/04/39/kingfisher-8705377_1280.jpg" alt="" />
                <span>photo.png</span>
              </div>
              <img src="./download.png" className="icon"alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://cdn.pixabay.com/photo/2024/04/19/04/39/kingfisher-8705377_1280.jpg" alt="" />
                <span>photo.png</span>
              </div>
              <img src="./download.png" className="icon"alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://cdn.pixabay.com/photo/2024/04/19/04/39/kingfisher-8705377_1280.jpg" alt="" />
                <span>photo.png</span>
              </div>
              <img src="./download.png" className="icon"alt="" />
            </div>
            
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button className='logout' onClick={()=>auth.signOut()}>Logout</button>
      </div>
    </div>
  )
}

export default Details