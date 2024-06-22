import React, { useEffect, useState } from 'react'
import './Users.css'
import TableData from '../../Components/TableData/TableData'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersFromServer, removeUserFromServer } from '../../Redux/store/users'
import swal from 'sweetalert'

export default function Users() {

    const dispatch = useDispatch()
    const users = useSelector(state => state.users[0])

    useEffect(() => {
        dispatch(getUsersFromServer())
    }, [users])

    const removeUser = (userId) => {
        swal({
            title: "Are You Sure To Delete User?",
            icon: 'warning',
            buttons: ['No', 'Yes']
        }).then(result => {
            if (result) {
                dispatch(removeUserFromServer(userId))
            }
        })
    }

    return (
        <div className='p-8 flex flex-col gap-10'>
            <TableData>
                <thead className="bg-white border-b">
                    <tr className='flex items-center justify-between w-full py-4'>
                        <th
                            scope="col"
                            className="text-sm font-medium text-[#666666] flex items-center justify-center w-full"
                        >
                            #
                        </th>
                        <th
                            scope="col"
                            className="text-sm font-medium text-[#666666] flex items-center justify-center w-full"
                        >
                            Name
                        </th>
                        <th
                            scope="col"
                            className="text-sm font-medium text-[#666666] flex items-center justify-center w-full"
                        >
                            Username
                        </th>
                        <th
                            scope="col"
                            className="text-sm font-medium text-[#666666] flex items-center justify-center w-full"
                        >
                            Email
                        </th>
                        <th
                            scope="col"
                            className="text-sm font-medium text-[#666666] flex items-center justify-center w-full"
                        >
                            Rule
                        </th>
                        <th
                            scope="col"
                            className="text-sm font-medium text-[#666666] flex items-center justify-center w-full"
                        >
                            Remove
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(users) &&users.map((user, index) => (
                        <tr key={user.id} className="bg-gray-100 border-b flex items-center justify-between w-full px-6 py-2 md:px-10 lg:px-20">
                            <td
                                className="text-sm text-gray-900 font-light  whitespace-nowrap flex items-start justify-center"
                            >
                                {index + 1}
                            </td>
                            <td
                                className="text-sm text-gray-900 font-light  whitespace-nowrap flex items-start justify-center"
                            >
                                {user.title}
                            </td>
                            <td
                                className="text-sm text-gray-900 font-light  whitespace-nowrap flex items-start justify-center"
                            >
                                {user.userName}
                            </td>
                            <td
                                className="text-sm text-gray-900 font-light  whitespace-nowrap flex items-start justify-center"
                            >
                                {user.email}
                            </td>
                            <td
                                className="text-sm text-gray-900 font-light  whitespace-nowrap flex items-start justify-center"
                            >
                                {user.rule}
                            </td>
                            <td
                                className="text-sm text-gray-900 font-light  whitespace-nowrap flex items-start justify-center"
                            >
                                <button onClick={() => removeUser(user.id)} className="bg-red-600 rounded-md p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </TableData>
        </div>
    )
}
