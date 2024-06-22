import React from 'react'
import './IndexCart.css'

export default function IndexCart({title, color, count, children}) {
    return (
        <div className={`flex flex-col justify-between bg-white rounded-md py-9 px-6 w-56 h-36 shadow-md border-[${color}] border-l-8`}>
            <div className="flex justify-between">
                <p className="text-[18px] text-[#666666]">{title}</p>
                <span className="font-bold">
                    {children}
                </span>
            </div>
            <span className="text-4 font-bold text-[#666666]">{count}</span>
        </div>
    )
}
