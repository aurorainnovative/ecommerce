import { Outlet } from "react-router-dom"
import Navbar from "../common/Navbar"
import Footer from "../common/Footer"


function AppLayout() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout
