import React from 'react'
import Footer from './Footer'
import Login from './Login'
import Navbar from './Navbar'
import Page1 from './Page1'
import Page2 from './Page2'
import Marque from './Shared/Marque'
import Register from './Register'
import { useCookies } from 'react-cookie'
import OrderForm from './OrderForm'

const Home = () => {
  const [cookie, setCookie] = useCookies(['authToken'])
  return (
    <div className="w-screen h-screen font-[Gilroy] flex-col flex overflow-x-hidden">
      <Login />
      <Register />
      <OrderForm />
      <Navbar isLoggedIn={cookie.authToken} userDets={cookie.details} />
      <Page1 />
      <Page2 />

      <Marque />
      <Footer />
    </div>
  )
}

export default Home
