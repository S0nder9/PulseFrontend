"use client"
import { useDeparments } from '@/hooks/useDepartments'
import React, { useEffect, useState } from 'react'
import { everyDepartment } from '../server/getAllDepartment'

type Props = {
    selected: number
}

function DeparmentsList(props: Props) {
    const [departments, setDepartments] = useState<department[] | department | null>([])
    async function getDepartments() {
        const response = await everyDepartment()
        setDepartments(response)
        console.log(response)
    }
    useEffect(() => {
        getDepartments()
    }, [])
    return (
        <div className="relative">
            <select
                className="block w-full rounded-md border-gray-300  bg-basic-default py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-indigo-500"
                id="department"
            >
                {
                    departments &&
                    (Array.isArray(departments) ?
                        departments.map((department) => (
                            <option key={department.id} value={department.id}
                                onChange={(e) => {
                                    props.selected = parseInt((e.target as HTMLSelectElement).value)
                                }}
                            >{department.name}</option>
                        ))
                        :
                        <option key={departments.id} value={departments.id}
                            onChange={(e) => {
                                props.selected = parseInt((e.target as HTMLSelectElement).value)
                            }}
                        >{departments.name}</option>
                    )
                }
            </select>
        </div>
    )
}

export default DeparmentsList