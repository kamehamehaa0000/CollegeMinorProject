import React from 'react'
import DishCard from './Shared/dishCard'
const Menu = () => {
  const categories = [
    'category1',
    'category2',
    'category3',
    'category4',
    'category5',
  ]
  return (
    <div className="w-full">
      <h1 className="text-[3vw] text-black font-semibold border-b-2">Menu</h1>
      <div className="my-3">
        <div className="flex items-center  gap-5">
          {categories.map((cat, index) => (
            <span className="hover:border-b-2 font-semibold">{cat}</span>
          ))}
        </div>
        <div className="w-full rounded-lg mt-7 justify-center flex items-center flex-wrap shadow-lg">
          <DishCard
            name={'Butter Paneer Masala'}
            description={
              'Paneer butter masala - Make the best, delicious & creamy restaurant style butter paneer at home with this super easy recipe!!'
            }
            price={400}
          />
          <DishCard
            name={'Butter Paneer Masala'}
            description={
              'Paneer butter masala - Make the best, delicious & creamy restaurant style butter paneer at home with this super easy recipe!!'
            }
            price={400}
          />
          <DishCard
            name={'Butter Paneer Masala'}
            description={
              'Paneer butter masala - Make the best, delicious & creamy restaurant style butter paneer at home with this super easy recipe!!'
            }
            price={400}
          />

          <DishCard
            name={'Butter Paneer Masala'}
            description={
              'Paneer butter masala - Make the best, delicious & creamy restaurant style butter paneer at home with this super easy recipe!!'
            }
            price={400}
          />
          <DishCard
            name={'Butter Paneer Masala'}
            description={
              'Paneer butter masala - Make the best, delicious & creamy restaurant style butter paneer at home with this super easy recipe!!'
            }
            price={400}
          />
          <DishCard
            name={'Butter Paneer Masala'}
            description={
              'Paneer butter masala - Make the best, delicious & creamy restaurant style butter paneer at home with this super easy recipe!!'
            }
            price={400}
          />
        </div>
      </div>
    </div>
  )
}

export default Menu
