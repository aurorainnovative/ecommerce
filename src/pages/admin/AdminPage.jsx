import React from 'react'
import { useAuth } from '../../hooks/useAuth'

const AdminPage = () => {
  const {user} = useAuth()
  console.log(user)
  return (
    <div>AdminPage</div>
  )
}

export default AdminPage