"use client"
import React, { useEffect, useState } from 'react'
import { emploeeHours } from '../server/getUserWorktime'

type Props = {
    id:number
}

function TotalTime(props: Props) {
    const [time, settime] = useState<number | null>(null)
    useEffect(() => {
        async function fetchData   ()  {
            if(!props.id){
return
            }

        const time = await emploeeHours(props.id)
        settime(time)
    }
fetchData()
    }, [])
    return (
        <h1>Общее рабочее время в этом месяце: { time && time} (ч)</h1>
    )
}

export default TotalTime