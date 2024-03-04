import React, { useCallback, useState, useRef, useEffect } from 'react'

import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

const Search = () => {
  const input = useSelector((state) => state.input.input)
  const [query, setQuery] = useState(input)
  const [result, setResult] = useState([])
  const [number, setNumber] = useState(15)
  const showmore = useRef(null)




  const apiKey = "47fa30f19c7849b08058f494ff3f9b4c"
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=${number}&query=${query}`
  // const getInfourl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
  // const imgPath = `https://spoonacular.com/recipeImages/${id}-240x150.jpg`

  const handleOnchange = (e) => {
    setQuery(e.target.value)
    
  }

  const getRecipe = useCallback(async () => {
    let recipes = await fetch(url)
    let response = await recipes.json()
    setResult(response.results)
    
  }, [number, query, apiKey])

  const handleBtnclick = () => {
    getRecipe()
    showmore.current.classList.remove("hidden")
  }

  const handleShowmore = () => {
    setNumber(25)
    getRecipe()
  }

  // const handleDetail = (e) => {
  //   dispatch(setID(e.target.id)) 
  // }


  return (
    <div className='min-h-[70vh]'>
      <div className="searchbox my-5 justify-center flex items-center">
        <input onChange={handleOnchange} value={query} className='outline-none py-1 px-2 text-[#17171f] bg-[#f9f4f4] text-lg font-semibold rounded-md w-2/4 ' type="text" />
        <button onClick={handleBtnclick} className='py-[10px] px-6 rounded-r-md cursor-pointer bg-[#17171f] text-[#f9f4f4] font-semibold relative right-16'>
          Search
        </button>
      </div>
      
      <div className="result flex gap-4 flex-wrap mx-auto w-3/4">
        {result.map(item => {
          return (
            <div key={item.id} className="flex flex-col items-center gap-2 bg-[#17171f] text-[#f9f4f4] rounded-md p-1">
              <img className='rounded-md' src={`https://spoonacular.com/recipeImages/${item.id}-240x150.jpg`} alt="" />
              <div className="title title font-semibold text-center max-w-[50%]">
                {item.title}
              </div>
              <Link to={`/info/${item.id}`}>
                <button className='py-1 rounded-md px-2 cursor-pointer font-semibold bg-[#f9f4f4] text-[#17171f]'>
                  Show Details
                </button>
              </Link>
            </div>
          )
        })}
        <div className='w-full flex justify-center'>
          <button ref={showmore} onClick={handleShowmore} className={`py-2 hidden rounded-md px-4 font-semibold bg-[#17171f] text-[#f9f4f4]`}>
            Show More
          </button>
        </div>
      </div>


    </div>
  )
}

export default Search
