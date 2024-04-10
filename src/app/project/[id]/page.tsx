'use client'
import { checkCookie } from '@/components/server/CheckCookie'
import { getAllProjectTasks } from '@/components/server/getUserProjects'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface Props  {
    params:{id:number}
}

const Project = ({ params }: Props) => {
    const projectId = params.id
    const [tasks, setTasks] = useState<task | Array<task>>([])
    const router = useRouter()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const fetchData = async () => {
            const isToken = await checkCookie()
            if (!isToken) {
                router.push('/login')
                return
            }
            try {
                const response = await getAllProjectTasks(params.id)
                setTasks(response)

            }
            catch (error) {
                throw new Error('error happened while authenticating user')
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            {
                tasks.length > 0?
                    <div>
                        {
                            Array.isArray(tasks) ?
                                tasks.map((task, index) =>
                                    <p key={index}>
                                        <p>{task.project_id}</p>
                                        <p> Часов для окончания{task.hoursToAccomplish}</p>
                                        <a>{task.name}</a>
                                        <p>{task.description}</p>
                                    </p>

                                )
                                :
                                <div>
                                    <p>{tasks.name}</p>
                                    <p>{tasks.description}</p>
                                </div>
                        }
                    </div>
                    :
                    <p> У проекта нету тасок</p>
            }
        </>
    )
}

export default Project