import React from 'react'
import SideBar from '../components/adminPanelComponents/SideBar'
import AdminPanHeader from '../components/adminPanelComponents/AdminPanHeader'
import ProductsDesk from '../components/adminPanelComponents/ProductsDesk'


const Products = () => {
  return (
    <div>
        <SideBar/>
        <AdminPanHeader/>
        <ProductsDesk/>
    </div>
  )
}

export default Products