import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-[#17171f] flex justify-between items-center py-5 px-2'>
            <div className="logo text-lg font-bold text-[#f9f4f4]">
                recipe<span className='text-[#FE4A49]'>Finder</span>
            </div>
            <div className="options">
                <ul className='flex gap-4 font-medium]'>
                    <li className='list-none'>
                        <NavLink to="/" className={({isActive})=>`text-[#f9f4f4] no-underline  ${isActive ? "text-[#fe4a49]" : "hover:underline"}`}>
                            Home
                        </NavLink>
                    </li>
                    <li className='list-none'>
                        <NavLink to="/about" className={({isActive})=>`text-[#f9f4f4] no-underline ${isActive ? "text-[#fe4a49]" : "hover:underline"}`}>
                            About
                        </NavLink>
                    </li>
                    <li className='list-none'>
                        <NavLink to="/category" className={({isActive})=>`text-[#f9f4f4] no-underline ${isActive ? "text-[#fe4a49]" : "hover:underline"}`}>
                            Categories
                        </NavLink>
                    </li>
                    <li className='list-none'>
                        <NavLink to="/search" className={({isActive})=>`text-[#f9f4f4] no-underline ${isActive ? "text-[#fe4a49]" : "hover:underline"}`}>
                            Search
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="signin flex gap-3">
                <button className='py-1 px-2 rounded-md font-semibold bg-[#f9f4f4] text-[#17171f] border-[#f9f4f4] border-1 hover:bg-[#f9f4f4c8]  hover:border-[#f9f4f4c8]'>
                    <NavLink to="/signin" className="no-underline text-[#17171f]">Sign In</NavLink>
                </button>
                <button className='py-1 px-2 rounded-md font-semibold bg-[#f9f4f4] text-[#17171f] border-[#f9f4f4] border-1 hover:bg-[#f9f4f4c8] hover:border-[#f9f4f4c8] '>
                    <NavLink to="/login" className="no-underline text-[#17171f]">Log In</NavLink>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
