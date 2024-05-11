import React from 'react'

const DishCard = ({ name, description, price, image }) => {
  return (
    <div className=" group border-2 m-4 w-2/5 md:max-w-[240px] min-h-[400px] rounded-lg hover:scale-105 overflow-hidden bg-white">
      <div>
        <img
          src={
            image ||
            'https://media.istockphoto.com/id/168855393/photo/gourmet-salad.jpg?s=612x612&w=0&k=20&c=bnDzlcKlZYR8NZQXOXb1fbF6x3sV8LnE5pu6rQA2LpI='
          }
          className="object-cover object-center h-[200px] group-hover:scale-105 sm:h-[250px] rounded-t-lg"
          alt=""
        />
      </div>
      <div className="p-2 overflow-hidden">
        <h1 className="text-lg sm:text-xl font-bold">{name}</h1>
        <p className="text-xs h-[100px] sm:text-sm font-medium">
          {description}
        </p>
      </div>
      <div className="flex justify-between items-center p-2">
        <span className="font-bold text-sm sm:text-base">₹{price}</span>
        <button className="bg-green-400 p-2 rounded-full text-white font-bold text-xs sm:text-sm">
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default DishCard
