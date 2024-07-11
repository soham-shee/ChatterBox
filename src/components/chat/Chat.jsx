import React, { useState, useRef, useEffect } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'

function Chat() {
  const[open,setOpen]=useState(false)
  const URL="https://ui-avatars.com/api/?name="
  const[text,setText]=useState("")
  const endRef = useRef(null)
  useEffect(()=>{
    endRef.current?.scrollIntoView({behaviour:"smooth"})
  },[])


  const handleEmoji = e =>{
    setText((prev)=>prev+e.emoji)
    setOpen(false)
  }
  console.log(text)
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src={URL+"soham"} alt="" />
          <div className="texts">
            <span>Soham Shee</span>
            <p>Description ...</p>
          </div>
        </div>
        <div className="icon">
          <img src="./info.png" alt="" />
        </div>
      </div>


      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio nulla dolore tenetur. Accusamus, nobis soluta? Quidem molestiae neque numquam eos.</p>
            <span>2 mins ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio nulla dolore tenetur. Accusamus, nobis soluta? Quidem molestiae neque numquam eos.</p>
            <span>2 mins ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio nulla dolore tenetur. Accusamus, nobis soluta? Quidem molestiae neque numquam eos.</p>
            <span>2 mins ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://cdn.pixabay.com/photo/2024/04/19/04/39/kingfisher-8705377_1280.jpg" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio nulla dolore tenetur. Accusamus, nobis soluta? Quidem molestiae neque numquam eos.</p>
            <span>2 mins ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>


      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" name="" value={text} id="" placeholder='Message now ...' onChange={(e) => setText(e.target.value)}/>
        <div className="emoji">
          <p></p>
          <img src="./emoji.png" alt="" onClick={()=>setOpen((prev) => !(prev))}/>
          <div className='picker'><EmojiPicker open={open} onEmojiClick={handleEmoji}/></div>
        </div>
        <button className="sendBtn">Send</button>
      </div>

    </div>
  )
}

export default Chat