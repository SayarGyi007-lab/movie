import React, { useState } from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { NavLink, useNavigate } from 'react-router-dom'

function Nav() {
    const [searchKey, setSearchKey] = useState("")
    const navigate = useNavigate()

    const Search = (e) => {
        e.preventDefault()
        if (!searchKey.trim()) {
            alert("Please type something to search")
            return
        }
        navigate(`/search/${searchKey}`)
    }
    return (
        <div className='bg-black text-white text-start justify-between flex  py-2'>
            <NavLink to={"/"} className=' ml-4 text-3xl font-mono font-bold text-start'>Movie-Demo</NavLink>
            <div className='flex items-center space-x-3'>
                <NavLink to={'/'} className={({ isActive }) => isActive ? "active-text" : "non-active text"} >Popular</NavLink>
                <NavLink to={'/upcoming'} className={({ isActive }) => isActive ? "active-text" : "non-active text"}>Upcoming</NavLink>
            </div>
            <form className='flex items-center' onSubmit={Search}>
                <input type="text" onChange={(e) => setSearchKey(e.target.value)} className='bg-transparent border-b-2 border-b-slate-200 focus:outline-none font-extralight text-sm' />
                <button type='submit' > <MagnifyingGlassIcon className='w-6 h-6' /></button>
            </form>
        </div>
    )
}

export default Nav