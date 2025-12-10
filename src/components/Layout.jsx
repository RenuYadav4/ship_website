import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Banner from './Banner'
import TopBar from './Topbar'

const Layout = () => {
  return (
    <div className="md:p-3 relative w-full overflow-x-hidden">
      {/* <TopBar/> */}
      <Navbar />
      <Outlet />
      <Banner/>
      <Footer />
    </div>
  )
}

export default Layout