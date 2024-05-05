import React from 'react'

const DishCard = ({ name, description, price, image }) => {
  return (
    <div className="border-2 m-2 max-w-[240px] h-[400px] rounded-lg  overflow-hidden bg-white">
      <div>
        <img
          src={
            image ||
            'https://media.istockphoto.com/id/168855393/photo/gourmet-salad.jpg?s=612x612&w=0&k=20&c=bnDzlcKlZYR8NZQXOXb1fbF6x3sV8LnE5pu6rQA2LpI='
          }
          className="object-cover h-[200px] rounded-t-lg "
          alt=""
        />
      </div>
      <div className="p-2">
        <h1 className="text-xl font-bold ">{name}</h1>
        <p className="text-sm font-medium ">{description}</p>
      </div>
      <div className="flex justify-between items-center p-2">
        <span className="font-bold ">₹{price}</span>
        <button className="bg-green-400 p-2 rounded-full text-white font-bold">
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default DishCard
