import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="w-full bg-[#A9B9CE] p-8">
      <div className="flex items-center justify-between border-b-2 border-black">
        <h1 className="text-[4vw] font-bold ">FoodTime.</h1>
        <h5 className="text-xl font-bold ">
          We treat your toung with flavours.
        </h5>
      </div>
      <div className="flex w-full">
        <div className="w-2/3 flex justify-between p-5">
          <div className="text-lg font-medium">
            <h1 className="text-[2vw] font-semibold my-2 ">Services</h1>
            <h3>Food Pre-Orders.</h3>
            <h3>Reservations.</h3>
            <h3>Menu.</h3>
            <h3>About us.</h3>
          </div>
          <div className="text-lg font-medium">
            <h1 className="text-[2vw] font-semibold my-2 ">Customer Care</h1>
            <h3>FAQs.</h3>
            <h3>Order cancellation policy,</h3>
            <h3>Taste Guide.</h3>
          </div>
          <div className="text-lg font-medium">
            <h1 className="text-[2vw] font-semibold  my-2">Info</h1>
            <h3>Terms and Conditions.</h3>
            <h3>Privacy policy.</h3>
          </div>
        </div>
        <div className="w-[2px] bg-black h-[220px] "></div>

        <div className="flex-grow text-lg font-medium mx-2">
          <p>
            No spam, just pure inspiration
            <br /> and good news.
          </p>
          <div className="h-[2px] w-full bg-black my-4"></div>
          We are always close.
          <h1>Call at : +91 909456XXXX</h1>
          <h1>Email : foodtime@gmail.com</h1>
          <FaInstagram className="inline text-2xl mr-2" />
          <FaTwitter className="inline text-2xl mr-2" />
        </div>
      </div>
    </div>
  )
}

export default Footer
