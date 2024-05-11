import React from 'react'
import Footer from './Footer'
import Login from './Login'
import Navbar from './Navbar'
import Page1 from './Page1'
import Page2 from './Page2'
import Marque from './Shared/Marque'

const Home = () => {
  return (
    <div className="w-screen h-screen font-[Gilroy] flex-col flex overflow-x-hidden">
      <Login />
      <Navbar />
      <Page1 />
      <Page2 />
      <Marque />
      <Footer />
    </div>
  )
}

export default Home
