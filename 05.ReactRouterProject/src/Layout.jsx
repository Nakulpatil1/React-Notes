import React from 'react'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import './App.css'

//Outlet is used to dynamically load different components based on the current URL route.
//Or it serves as a placeholder for child routes within a parent route.
import { Outlet } from 'react-router-dom'
import About from './components/About/About'

function Layout() {
  
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    {/* <About/> */}
    </>
  )
}
export default Layout

