"use client"
import { useTasks } from '@/hooks/useTasks'
import { useUserTasks } from '@/hooks/useUserTasks'
import React from 'react'
import { CardTitle, CardDescription, CardHeader,CardFooter, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { Button } from '../ui/button'
import { deleteTask } from '../server/deleteObj'
import { useDepartment, useId } from '@/hooks/useCheck'
import TaskImportance from './TaskImportance'
import { useDepartmentTasks } from '@/hooks/useDepTasks'
type Props = {
}

function DepTasks(props: Props) {
    const id = useDepartment()
    const {tasks,tasksByStage,isMounted,getTasks}=  useDepartmentTasks({
       departmentId:id
    })
  return (
    <section className=" bg-basic-default  p-4 rounded-2xl overflow-hidden">
    <h2 className="text-lg font-bold  bg-basic-default ">Задачи твоего отдела</h2>
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
              <TaskImportance value={project.priority} created_at={project.created_at}  toAcc={project.hoursToAccomplish}/>
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
            <Badge>{tasks.created_at}</Badge>
          </CardContent>
          <CardFooter className="flex flex-col gap-1 sm:justify-end sm:flex-row">
            <Button className="w-fit   overflow-hidden">
              <Link href="/project/[id]" as={`/projectView/${tasks.id}`} prefetch={false}>
                Смотреть
              </Link>
            </Button>
            <Button
              className="w-full sm:w-auto"
              onClick={() => {
                const sure = confirm("Вы уверены что хотите удалить проект ?");
                if (sure && Array.isArray(tasks) && tasks.length > 0) {
                  deleteTask(tasks[0].id);
                }
              }}
            >
              Удалить
            </Button>
          </CardFooter>
        </Card>}
    </div>
  </section>
  )
}

export default DepTasks