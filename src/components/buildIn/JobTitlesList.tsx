"use client"
import { useJobTitles } from '@/hooks/useDepartments'
import React, { useEffect, useState } from 'react'
import { fetchAllTitles } from '../server/FetchJobTitle'

type Props = {
    selected: number
}

function JobTitlesList(props: Props) {

  const [jobTitles, setJobTitles] = useState<jobTitle[] | null>([])
    async function getJobTitles() {
        const response = await fetchAllTitles()
        setJobTitles(response)
    }

    useEffect(()=>{
          getJobTitles()
    },[])
  return (
    <div className="relative">
              <select
                className="block w-full rounded-md border-gray-300 bg-basic-default dark:text-gray-300 dark:focus:border-indigo-500"
                id="job"
              >
           {
jobTitles!.map((jobTitle) => (
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