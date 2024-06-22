import React from 'react'
import './SideBar.css'
import { NavLink } from 'react-router-dom'

export default function SideBar({ isShowMenu }) {
    return (
        <aside className={`${isShowMenu ? 'visible' : ''} transition-all flex-col bg-[#21232d] text-[#9799ab] h-screen gap-4 opacity-0 invisible flex fixed top-0 -left-100 md:sticky md:opacity-100 md:visible md:left-0 md:flex-[1.5_1.5_0%] lg:flex-1`} id="sidebar">
            <h2 className='text-xl font-bold p-5 text-nowrap flex items-center gap-1'>CMS-Panel</h2>
            <ul className="flex flex-col">
                <NavLink to="/" className='text-4 text-nowrap flex items-center gap-1 p-5 hover:bg-slate-700 transition-colors'>
                    <span className="font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                    </span>
                    Dashboard
                </NavLink>
                <NavLink to="/users" className='text-4 text-nowrap flex items-center gap-1 p-5 hover:bg-slate-700 transition-colors'>
                    <span className="font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </span>
                    Users
                </NavLink>
                <NavLink to="/products" className='text-4 text-nowrap flex items-center gap-1 p-5 hover:bg-slate-700 transition-colors'>
                    <span className="font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>
                    </span>
                    Products
                </NavLink>
            </ul>
        </aside>
    )
}
