"use client"
import { useJobTitles } from '@/hooks/useDepartments'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { fetchAllTitles } from '../server/FetchJobTitle'

type Props = {
    selected: number,
    onChange: (value: string) => void;
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
    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = event.target.value;
      props.onChange(selectedValue);
    };
  return (
    <div className="relative">
      <select
        className="block w-full rounded-md border-gray-300 bg-basic-default dark:text-gray-300 dark:focus:border-indigo-500"
        id="job"
        value={props.selected}
        onChange={handleSelectChange}
      >
        {jobTitles!.map((jobTitle) => (
          <option key={jobTitle.id} value={jobTitle.id}>
            {jobTitle.name}
          </option>
        ))}
      </select>
      {props.selected}

            </div>
  )
}

export default JobTitlesList