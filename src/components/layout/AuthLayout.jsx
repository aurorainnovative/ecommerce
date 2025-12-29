import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div>
        <div>HOme</div>
        <Outlet/>
    </div>
  )
}

export default AuthLayout