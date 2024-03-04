import React from 'react'
import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const [first, setFirst] = useState([])
  const [pastadata, setPastadata] = useState([])
  const [sushidata, setSushidata] = useState([])


  const apiKey = "47fa30f19c7849b08058f494ff3f9b4c"

  const getPizza = useCallback(async () => {
    let data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=4&query=pizza`)
    let response = await data.json()
    setFirst(response.results)
    
  }, [apiKey])

  useEffect(() => {
    getPizza()
  }, [])


  const getPasta = useCallback(async () => {
    let pastaData = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=4&query=pasta`)
    let res = await pastaData.json()
    setPastadata(res.results)
  }, [apiKey])

  useEffect(() => {
    getPasta()
  }, [])


  const getSushi = useCallback(async () => {
    let sushiData = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=4&query=sushi`)
    let resSushi = await sushiData.json()
    setSushidata(resSushi.results)
  }, [apiKey])

  useEffect(() => {
    getSushi()
  }, [])




  return (
    <>
      <div>

        <div className="my-9 flex flex-col gap-5">
          <h2>Pizza</h2>
          <div className="results flex gap-3 w-3/4 mx-auto">
            {first.map((item) => {
              return (
                <div key={item.id} className="flex flex-col items-center gap-2 bg-[#17171f] text-[#f9f4f4] rounded-md p-1">
                  <img className='rounded-md' src={`https://spoonacular.com/recipeImages/${item.id}-240x150.jpg`} alt="" />
                  <div className="title title font-semibold text-center">
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


          </div>
          <h2>Pasta</h2>
          <div className='flex gap-3 w-3/4 mx-auto'>
            {pastadata.map((item) => {
              return (
                <div key={item.id} className="flex flex-col items-center gap-2 bg-[#17171f] text-[#f9f4f4] rounded-md p-1">
                  <img className='rounded-md' src={`https://spoonacular.com/recipeImages/${item.id}-240x150.jpg`} alt="" />
                  <div className="title title font-semibold text-center">
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
          </div>

          <h2>Sushi</h2>
          <div className='flex gap-3 w-3/4 mx-auto'>
            {sushidata.map((item) => {
              return (
                <div key={item.id} className="flex flex-col items-center gap-2 bg-[#17171f] text-[#f9f4f4] rounded-md p-1">
                  <img className='rounded-md' src={`https://spoonacular.com/recipeImages/${item.id}-240x150.jpg`} alt="" />
                  <div className="title title font-semibold text-center">
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
          </div>
        </div>
      </div>
    </>
  )
}


export default Home
