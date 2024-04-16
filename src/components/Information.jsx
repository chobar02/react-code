import React, { useCallback } from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser';
import Loader from "./Loader"

const Information = () => {
    const { resid } = useParams()
    const [response, setResponse] = useState({})
    const [isLoading, setIsLoading] = useState(true)


    const apiKey = "47fa30f19c7849b08058f494ff3f9b4c"
    const url = `https://api.spoonacular.com/recipes/${resid}/information?apiKey=${apiKey}`
    const imgPath = `https://spoonacular.com/recipeImages/${resid}-556x370.jpg`
    //https://api.spoonacular.com/recipes//information?apiKey=47fa30f19c7849b08058f494ff3f9b4c


    const getInfo = async () => {
        let data = await fetch(url)
        let res = await data.json()
        setResponse(res)
        setIsLoading(false)
    }
    useEffect(() => {
        getInfo()
    }, [])

    if (isLoading) {
        return <div className='flex items-center justify-center'><Loader /></div>
    }

    return (
        <>
            <div className='flex flex-col gap-3 items-center w-[90%] mx-auto my-4'>
                <div className="img">
                    <img className='rounded-md' src={imgPath} alt="" />
                </div>
                <div className="title font-bold text-lg">
                    {response.title}
                </div>
                <div className='other flex flex-col gap-2'>
                    <span>vegetarian: {response.vegetarian ? "True" : "False"}</span>
                    <span>Time : {response.readyInMinutes} Minutes</span>
                    <span className='flex items-center justify-center'>
                        Cuisines : <span className='flex gap-2'>
                            {response.cuisines.map((cuisine) => (
                                 <span>{ cuisine},</span>
                            ))}
                        </span>
                    </span>
                </div>
                <div className="summary">
                    {response.summary && parse(response.summary)}
                </div>
                <div className='border border-solid border-black p-2'>{response.instructions}</div>
            </div>
        </>
    )
}

export default Information
