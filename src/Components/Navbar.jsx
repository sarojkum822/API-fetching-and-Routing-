// import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-full h-[10vh] bg-zinc-100 border-t-4 text-center select-none items-center text-[1.4vw] font-light flex justify-center gap-6 border-b-2 border-b-gray-600'>

            <NavLink style={(e) => {
                // console.log(e)
                return {
                  
                   fontWeight:e.isActive?"normal":"lighter",
                   
                   
                }
            }}  to="/">Home</NavLink>
            <NavLink style={(e) => {
            }} to="/service">Service</NavLink>
            <NavLink style={(e) => {
            }} to="/blog">Blog</NavLink>
            <NavLink style={(e) => {
            }} to="/about">About</NavLink>
            <NavLink style={(e) => {
            }} to="/contact">Contact</NavLink>
            <NavLink style={(e) => {
            }} to="/register">Register</NavLink>

        </div>
    )
}

export default Navbar