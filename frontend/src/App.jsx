import { useContext, useState } from 'react'
import registrationModalContext from './components/contexts/registerationModal.context'
import loginModalContext from './components/contexts/loginModal.context'
import cartModalContext from './components/contexts/cartModal.context.js'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenReg, setIsOpenReg] = useState(false)
  const [isOpenCart, setIsOpenCart] = useState(false)

  return (
    <div className="w-screen h-screen font-[Gilroy] flex-col flex overflow-x-hidden">
      <loginModalContext.Provider value={{ isOpen, setIsOpen }}>
        <cartModalContext.Provider value={{ isOpenCart, setIsOpenCart }}>
          <registrationModalContext.Provider
            value={{ isOpenReg, setIsOpenReg }}
          >
            <BrowserRouter>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/*" element={<Home />} />
              </Routes>
            </BrowserRouter>
          </registrationModalContext.Provider>
        </cartModalContext.Provider>
      </loginModalContext.Provider>
    </div>
  )
}

export default App
