'use client'
import { checkCookie } from '@/components/server/CheckCookie'
import { getAllProjectTasks } from '@/components/server/getUserProjects'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface Props  {
    params:{id:number}
}

const Project = ({ params }: Props) => {
    const projectId = params.id
    const [tasks, setTasks] = useState<task | Array<task>>([])
    const [todo, setTodo] = useState<task | Array<task>>([])
    const [progress, setProgres] = useState<task | Array<task>>([])
    const [ready, setready] = useState<task | Array<task>>([])
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
    const tasksByStage: { [stage: string]: task[] } = {};
    if(Array.isArray(tasks)){
    tasks.forEach(task => {
      if (!tasksByStage[task.stageAt]) {
        tasksByStage[task.stageAt] = [];
      }
      tasksByStage[task.stageAt].push(task);
    });
}
  //завтра добавить логику изменения таски , а также добавить другие фичи
    return (
          <main className="flex h-screen">
               {
                tasks?
          <section className="flex-1 p-4">
            <div className="flex justify-between mb-4">
              <h1 className="text-2xl font-bold">Доска</h1>        
            </div>
            <div className="grid grid-cols-3 gap-2">
            {Object.keys(tasksByStage).map(stage => (
        <div key={stage}>
          <h2>{stage}</h2>
          <ul>
            {tasksByStage[stage].map(task => (
              <li key={task.id}>
                <h3>{task.name}</h3>
                <p>{task.description}</p>
                <p>Hours to Accomplish: {task.hoursToAccomplish}</p>
                <p>Priority: {task.priority}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    
            </div>
          </section>
          :
          null
}
        </main>
    )
}

export default Project