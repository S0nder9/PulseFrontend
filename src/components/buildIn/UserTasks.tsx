"use client"
import { useTasks } from '@/hooks/useTasks'
import { useUserTasks } from '@/hooks/useUserTasks'
import React from 'react'
import { CardTitle, CardDescription, CardHeader,CardFooter, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { Button } from '../ui/button'
import { deleteTask } from '../server/deleteObj'
import { useId } from '@/hooks/useCheck'
import TaskImportance from './TaskImportance'
import TotalTime from './totalTime'
type Props = {
}

function UserTasks(props: Props) {
    const id = useId()
    const {tasks,tasksByStage,isMounted,getTasks}=  useUserTasks({
        userId:id
    })
  return (
    <section className=" bg-basic-default  p-4 rounded-2xl overflow-hidden">
        <TotalTime id={id}/>
    <h2 className="text-lg font-bold  bg-basic-default ">Задачи</h2>
    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {Array.isArray(tasks)
        ? tasks.map((project, index) => (
          <Card className=" bg-cards-base  " key={index}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge>{new Date(project.created_at).toLocaleDateString()}</Badge>
              <Badge>Статус : {project.stageAt}</Badge>
            </CardContent>
            <CardFooter className="flex flex-col gap-1 sm:justify-end sm:flex-row">
              <Button className="w-fit sm:w-auto overflow-hidden">
                <Link href="/project/[id]" as={`/projectView/${project.project_id}`}  prefetch={false}>
                  Посмотреть
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))
        : <Card className="bg-cards-base">
          <CardHeader>
            <CardTitle>{tasks.name}</CardTitle>
            <CardDescription>{tasks.description}</CardDescription>
          </CardHeader>
          <CardContent>
              <Badge>{new Date(tasks.created_at).toLocaleDateString()}</Badge>
        
              <Badge>Статус : {tasks.stageAt}</Badge>
            </CardContent>
            <CardFooter className="flex flex-col gap-1 sm:justify-end sm:flex-row">
              <Button className="w-fit sm:w-auto overflow-hidden">
                <Link href="/project/[id]" as={`/projectView/${tasks.project_id}`}  prefetch={false}>
                  Посмотреть
                </Link>
              </Button>
            </CardFooter>
        </Card>}
    </div>
  </section>
  )
}

export default UserTasks