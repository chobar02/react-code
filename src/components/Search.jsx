import React, { useCallback, useState, useRef, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from './Loader'

const Search = () => {
  const input = useSelector((state) => state.input.input)
  const [query, setQuery] = useState(input)
  const [result, setResult] = useState([])
  const [number, setNumber] = useState(15)
  const showmore = useRef(null)
  const [isLoading, setIsLoading] = useState(false)




  const apiKey = "47fa30f19c7849b08058f494ff3f9b4c"
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=${number}&query=${query}`


  const handleOnchange = (e) => {
    setQuery(e.target.value)

  }

  useEffect(() => {
    if (query.length > 0) {
      setTimeout( async () => {        
        setIsLoading(true)
        let recipes = await fetch( `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=${number}&query=${query}`)
        let response = await recipes.json()
        setResult(response.results)
        setIsLoading(false)
      }, 2000);
    }
  }, [query])


  // const getRecipe = useCallback(async () => {
  //   if (query.length > 0) {
  //     setIsLoading(true)
  //     let recipes = await fetch(url)
  //     let response = await recipes.json()
  //     setResult(response.results)
  //     setIsLoading(false)
  //   }

  // }, [number, query, apiKey])

  const handleBtnclick = () => {
    getRecipe()
    showmore.current.classList.remove("hidden")
  }

  const handleShowmore = () => {
    setNumber(25)
    getRecipe()
  }


  if (isLoading) {
    return <div className='min-h-[70vh]'>
      <div className="searchbox my-5 justify-center flex items-center">
        <input onChange={handleOnchange} value={query} className='outline-none py-1 px-2 text-bgColor bg-textColor text-lg font-semibold rounded-md md:w-2/4 w-3/4' type="text" />
        <button onClick={handleBtnclick} className='py-[10px] px-6 rounded-r-md cursor-pointer bg-bgColor text-textColor font-semibold relative right-16'>
          Search
        </button>
      </div>
      <div className='flex items-center justify-center'>
        <Loader />
      </div>
    </div>
  }


  return (
    <div className='min-h-[70vh]'>
      <div className="searchbox my-5 justify-center flex items-center">
        <input onChange={handleOnchange} value={query} className='outline-none py-1 px-2 text-bgColor bg-textColor text-lg font-semibold rounded-md w-3/4 md:w-2/4 ' type="text" />
        <button onClick={handleBtnclick} className='py-[10px] px-6 rounded-r-md cursor-pointer bg-bgColor text-textColor font-semibold relative right-16'>
          Search
        </button>
      </div>

      <div className="result flex gap-4 flex-wrap mx-auto w-3/4">
        {result.map(item => {
          return (
            <div key={item.id} className="flex flex-col items-center gap-2 bg-bgColor text-textColor rounded-md p-1">
              <img className='rounded-md' src={`https://spoonacular.com/recipeImages/${item.id}-240x150.jpg`} alt="" />
              <div className="title title font-semibold text-center max-w-[50%]">
                {item.title}
              </div>
              <Link to={`/info/${item.id}`}>
                <button className='py-1 rounded-md px-2 cursor-pointer font-semibold bg-textColor text-bgColor'>
                  Show Details
                </button>
              </Link>
            </div>
          )
        })}
        <div className='w-full flex justify-center'>
          <button disabled={result.length < number} ref={showmore} onClick={handleShowmore} className={`py-2 disabled:opacity-50 hidden rounded-md px-4 font-semibold bg-bgColor text-textColor`}>
            Show More
          </button>
        </div>
      </div>


    </div>
  )
}

export default Search
