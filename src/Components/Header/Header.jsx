import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

export default function Header({ setIsShowMenu }) {

    return (
        <header className="z-50 bg-white flex items-center justify-between py-5 px-8 sticky top-0 shadow-lg">
            <span className="header_menu-btn cursor-pointer md:invisible md:opacity-0" onClick={() => setIsShowMenu(prev => !prev)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </span>
            <NavLink to='/register' className='bg-[#21232d] transition-all hover:bg-slate-700 p-2 text-[#9799ab] rounded-md'>Register</NavLink>
            <span className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </span>
        </header>
    )
}
