import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)

    const handleSidebar = () => {
      setSidebar(!sidebar)
    }
    

    return (
        <nav className='overflow-x-hidden w-full'>
            <div className='bg-bgColor flex justify-between items-center py-5 px-2'>
                <div className="logo text-lg font-bold text-textColor">
                    recipe<span className='text-[#fe4a49]'>Finder</span>
                </div>
                <div className="options hidden md:block">
                    <ul className='flex gap-4 font-medium '>
                        <li className='list-none'>
                            <NavLink to="/" className={({ isActive }) => `text-textColor no-underline  ${isActive ? "text-[#fe4a49]" : "hover:underline"}`}>
                                Home
                            </NavLink>
                        </li>
                        <li className='list-none'>
                            <NavLink to="/about" className={({ isActive }) => `text-textColor no-underline ${isActive ? "text-[#fe4a49]" : "hover:underline"}`}>
                                About
                            </NavLink>
                        </li>
                        <li className='list-none'>
                            <NavLink to="/category" className={({ isActive }) => `text-textColor no-underline ${isActive ? "text-[#fe4a49]" : "hover:underline"}`}>
                                Categories
                            </NavLink>
                        </li>
                        <li className='list-none'>
                            <NavLink to="/search" className={({ isActive }) => `text-textColor no-underline ${isActive ? "text-[#fe4a49]" : "hover:underline"}`}>
                                Search
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div onClick={handleSidebar} className="burger md:hidden">
                    <img src="/bars.svg" alt="" />
                </div>
            </div>
            <div className={`sidebar absolute ${sidebar ? 'right-0' : 'right-[-60%]'} z-30 duration-300 ease-in min-h-[70vh] bg-black`}>
                <ul className='flex flex-col gap-4 font-medium  pr-20 pl-3 py-5'>
                    <li className='list-none'>
                        <NavLink to="/" className={({ isActive }) => `text-textColor no-underline  ${isActive ? "text-[#fe4a49]" : "hover:underline"}`}>
                            Home
                        </NavLink>
                    </li>
                    <li className='list-none'>
                        <NavLink to="/about" className={({ isActive }) => `text-textColor no-underline ${isActive ? "text-[#fe4a49]" : "hover:underline"}`}>
                            About
                        </NavLink>
                    </li>
                    <li className='list-none'>
                        <NavLink to="/category" className={({ isActive }) => `text-textColor no-underline ${isActive ? "text-[#fe4a49]" : "hover:underline"}`}>
                            Categories
                        </NavLink>
                    </li>
                    <li className='list-none'>
                        <NavLink to="/search" className={({ isActive }) => `text-textColor no-underline ${isActive ? "text-[#fe4a49]" : "hover:underline"}`}>
                            Search
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
