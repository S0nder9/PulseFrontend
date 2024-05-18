import { useDeparments } from '@/hooks/useDepartments'
import React from 'react'

type Props = {
    selected: number
}

function DeparmentsList(props: Props) {
    const { departments = [] } = (useDeparments() || { departments: [] }) as { departments: department[] }
    return (
        <div className="relative">
            <select
                className="block w-full rounded-md border-gray-300  bg-basic-default py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-indigo-500"
                id="department"
            >
                {
                    departments.map((department) => (
                        <option key={department.id} value={department.id}
                            onChange={(e) => {
                                props.selected = parseInt((e.target as HTMLSelectElement).value)
                            }}>{department.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default DeparmentsList