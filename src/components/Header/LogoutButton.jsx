import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutButton() {
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        authService.logout().then(()=>{ //.then isiliye kyuki logout method async await m ya promises m tha
            dispatch(logout()) // store k andr value updated rhe isilye
        })
    }
  return (
    <div>
      <button  className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
      
    onClick={logoutHandler}>LogOut</button>
    </div>
  )
}

export default LogoutButton
