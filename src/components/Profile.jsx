import React from 'react'
import UpdateProfile from './UpdateProfile'
import { useSelector } from 'react-redux'
const Profile = () => {
  const user = useSelector((store)=>store.user)
  return (
    <div>
      {user && <UpdateProfile user={user}/>}
    </div>
  )
}

export default Profile