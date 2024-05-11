import React, { useContext } from 'react'
import { MdOutlineShoppingCart } from 'react-icons/md'
import loginModalContext from './contexts/loginModal.context'

const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(loginModalContext)
  return (
    <div className="w-full h-[60px] p-4 md:p-8 justify-between flex items-center">
      <div className="font-bold text-2xl">FoodTime</div>
      <div className="hidden md:flex font-bold items-center text-md gap-2 md:gap-7">
        <div className="hover:border-b-2">Home</div>
        <div className="hover:border-b-2">Services</div>
        <div className="hover:border-b-2">Reservation</div>
        <div className="hover:border-b-2">Contact us</div>
      </div>
      <div className="flex font-bold items-center gap-4">
        <button
          className="text-sm md:text-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          Login
        </button>
        <div>
          <button className="text-white flex items-center  bg-green-700 px-3 py-1 rounded-full ">
            <MdOutlineShoppingCart className="inline text-md md:text-lg m-2 " />
            <p className="mr-2 text-md md:text-lg">My Cart</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
