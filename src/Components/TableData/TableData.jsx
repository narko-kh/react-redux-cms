import React from 'react'
import './TableData.css'

export default function TableData({ children }) {
    return (
        <table className="flex flex-col bg-white rounded-md overflow-hidden w-full">
            {children}
        </table>
    )
}
