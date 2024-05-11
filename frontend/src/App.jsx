import { useContext, useState } from 'react'
import Footer from './components/Footer'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Marque from './components/Shared/Marque'
import loginModalContext from './components/contexts/loginModal.context'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="w-screen h-screen font-[Gilroy] flex-col flex overflow-x-hidden">
      <loginModalContext.Provider value={{ isOpen, setIsOpen }}>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </loginModalContext.Provider>
    </div>
  )
}

export default App
