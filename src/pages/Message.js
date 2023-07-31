import React from 'react'
import SideBar from '../components/adminPanelComponents/SideBar'
import AdminPanHeader from '../components/adminPanelComponents/AdminPanHeader'
import MessageDesk from '../components/adminPanelComponents/MessageDesk'


const Message = () => {
  return (
    <div>
        <SideBar/>
        <AdminPanHeader/>
        <MessageDesk/>
    </div>
  )
}

export default Message