import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { setInput } from '../redux/input/inputSlice';
import { useDispatch } from 'react-redux';

const bestfoodItems = [
  { id: 1, name: "Sushi", cuisine: "Japanese", rating: 5 },
  { id: 2, name: "Pizza", cuisine: "Italian", rating: 4.8 },
  { id: 3, name: "Chocolate Croissant", cuisine: "French", rating: 4.5 },
  { id: 4, name: "Tacos", cuisine: "Mexican", rating: 4.7 },
  { id: 5, name: "Pad Thai", cuisine: "Thai", rating: 4.6 },
  { id: 6, name: "Gelato", cuisine: "Italian", rating: 4.9 },
  { id: 7, name: "Sushi Burrito", cuisine: "Japanese-Mexican Fusion", rating: 4.4 },
  { id: 8, name: "Hamburger", cuisine: "American", rating: 4.7 },
  { id: 9, name: "Pasta Carbonara", cuisine: "Italian", rating: 4.8 },
  { id: 10, name: "Ramen", cuisine: "Japanese", rating: 4.6 },
  { id: 11, name: "Churrasco", cuisine: "Brazilian", rating: 4.8 },
  { id: 12, name: "Dim Sum", cuisine: "Chinese", rating: 4.5 },
  { id: 13, name: "Moussaka", cuisine: "Greek", rating: 4.7 },
  { id: 14, name: "Chicken Adobo", cuisine: "Filipino", rating: 4.6 },
  { id: 15, name: "Butter Chicken", cuisine: "Indian", rating: 4.9 },
  { id: 16, name: "Ceviche", cuisine: "Peruvian", rating: 4.7 },
  { id: 17, name: "Pho", cuisine: "Vietnamese", rating: 4.8 },
  { id: 18, name: "Paella", cuisine: "Spanish", rating: 4.6 },
  { id: 19, name: "Baklava", cuisine: "Middle Eastern", rating: 4.5 },
  { id: 20, name: "Poutine", cuisine: "Canadian", rating: 4.4 },
  { id: 21, name: "Croissant", cuisine: "French", rating: 4.8 },
  { id: 22, name: "Shawarma", cuisine: "Middle Eastern", rating: 4.6 },
  { id: 23, name: "Cannoli", cuisine: "Italian", rating: 4.7 },
  { id: 24, name: "Gyoza", cuisine: "Japanese", rating: 4.5 },
  { id: 25, name: "Biryani", cuisine: "Indian", rating: 4.9 },
];




const Category = () => {

  const [fooditems, setFooditems] = useState(bestfoodItems)
  const dispatch = useDispatch()


  return (
    <>
      <div className='bg-textColor text-bgColor w-3/4 mx-auto'>
        <div className='flex gap-10 my-5'>
          <h3 className='min-w-40'>Food</h3>
          <h3>Cuisine</h3>
        </div>
        {fooditems.map((item) => {
          return <div className='flex gap-10' key={item.id}>
            <div className='min-w-40'>
              <Link to="/search" onClick={() => { dispatch(setInput(item.name)) }} className='no-underline text-lg font-semibold hover:underline text-[#17171f]'>
                {item.name}
              </Link>
            </div>
            <div>{item.cuisine}</div>
          </div>
        })}
      </div>
    </>
  )
}

export default Category
