import List from './components/list/List'
import Chat from './components/chat/Chat'
import Details from './components/details/Details'
import Login from './components/login/Login'
import Notifications from './components/notifications/Notifications'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useUserStore } from './config/userStore'
import { auth } from './config/firebase'

const App = () => {

  const {currentUser, isLoading, fetchUserInfo} = useUserStore()

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth, (user)=>{
      fetchUserInfo(user?.uid)
    })
    return ()=>{
      unSub()
    }
  },[fetchUserInfo])

  console.log(currentUser)

  if (isLoading) return <div className="loading">Loading...</div>

  return (
    <div className='box'>
      { currentUser ? (
        <>
        <List/>
        <Chat/>
        <Details />
        </>
      ): (
      <Login/>
    )}
    <Notifications/>
    </div>
  )
}

export default App