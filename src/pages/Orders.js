import React from 'react'
import SideBar from '../components/adminPanelComponents/SideBar'
import AdminPanHeader from '../components/adminPanelComponents/AdminPanHeader'
import OrderDesk from '../components/adminPanelComponents/OrderDesk'


const Orders = () => {
  return (
    <div>
        <SideBar/>
        <AdminPanHeader/>
        <OrderDesk/>
    </div>
  )
}

export default Orders