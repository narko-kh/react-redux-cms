import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function PrivetRoute({ children }) {

    // const user = JSON.parse(localStorage.getItem('user'));

    const navigate = useNavigate()

    return (
        <>
            {children}
            {/* {user ? children : navigate('/login-register')} */}
        </>
    )
}
