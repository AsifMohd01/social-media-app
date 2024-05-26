import { useParams } from 'react-router-dom';
import { userData } from '../../data'
import React from 'react'

const profilePage = () => {
  const {userId} = useParams()
  const user = userData[userId-1] ;
  console.log(user);
  return (
    <>
    {user ?
      <div>
      <h2>{user.firstName}</h2>
      <h2>{user.lastName}</h2>
      <h3>{user.location}</h3>
      <h3>{user.occupation}</h3>
    </div> 
    :
    <div>
      <h1>User not found</h1>
    </div>
    }
    </>
  )
}

export default profilePage

