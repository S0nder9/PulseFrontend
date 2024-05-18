import { useJobTitles } from '@/hooks/useDepartments'
import React from 'react'

type Props = {
    selected: number
}

function JobTitlesList(props: Props) {
    const { jobTitles = [] } = (useJobTitles() || { jobTitles: [] }) as { jobTitles: jobTitle[] }
  return (
    <div className="relative">
              <select
                className="block w-full rounded-md border-gray-300 bg-basic-default dark:text-gray-300 dark:focus:border-indigo-500"
                id="job"
              >
           {
jobTitles.map((jobTitle) => (
    <option key={jobTitle.id} value={jobTitle.id}
    onChange={(e) => {
        props.selected = parseInt((e.target as HTMLSelectElement).value)
    }}
    >{jobTitle.name}</option>
    ))

           }
              </select>
            </div>
  )
}

export default JobTitlesList