import React from 'react'
import SideBar from '../components/adminPanelComponents/SideBar'
import AdminPanHeader from '../components/adminPanelComponents/AdminPanHeader'
import ReportDesk from '../components/adminPanelComponents/ReportDesk'


const Report = () => {
  return (
    <div>
        <SideBar/>
        <AdminPanHeader/>
        <ReportDesk/>
    </div>
  )
}

export default Report