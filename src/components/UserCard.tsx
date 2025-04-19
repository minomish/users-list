import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = () => {
  return (
    <div>
        <img src="" alt="" />
        <div>
            <p>name+last</p>
            <p>email</p>
            <Link to="/">Подробнее</Link>
        </div>
      
    </div>
  )
}

export default UserCard
