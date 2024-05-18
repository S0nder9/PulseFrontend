"use client"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import React, { useEffect, useState } from 'react'
import { DropdownMenuTrigger, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { getAllProjectIssues } from '@/components/server/getUserProjects'
import AddProblem from '@/components/buildIn/AddProblem'
import ProjectData from '@/components/buildIn/ProjectData'
import { useIssues } from '@/hooks/useIssues'
import Loading from '@/components/buildIn/Loading'
type Props = {
  params:{
    id:number
  }
}

const Issues = (props: Props) => {
  const [selected, setselected] = useState<number>(0)
  const [isOpened, setisOpened] = useState(false)
  const [type, settype] = useState<"delete" | "change" | "patch" | "add" | null>(null)
  const [current, setcurrent] = useState("")
const {isMounted,problems} = useIssues(props.params.id)
  //! Добавить доску ошибок 
  return (
    <>
    {
      !isMounted && <Loading/>
    }
      {
        isOpened && <AddProblem isOpened={isOpened} project={1} setisOpened={setisOpened} type={type} id={selected} current={current} />
      }
            <ProjectData projectId={1} projectName='' withMenu={true}/>
      <main className="bg-basic-default rounded-lg shadow-md p-6 h-screen w-full">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Доска Ошибок</h1>
          <Button variant="default" size="sm"
            onClick={() => {
              setisOpened(true);
              settype("add");

              setselected(1); 
            }}>Создать проблему</Button>
        </header>
        <div className="">
          {
            problems ?
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">Номер</th>
                    <th className="text-left">Заголовок</th>
                    <th className="text-left">Описание</th>
                    <th className="text-left">
                      <div className="flex items-center gap-2">
                        <span>Создано</span>
                      </div>
                    </th>
                    <th className="text-left">Статус</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Array.isArray(problems) ?
                    problems.map((problem) =>
                      <tr key={problem.id}>
                        <td>#{problem.id}</td>
                        <td className="font-medium">{problem.name}
                        </td>
<td>{problem.description}</td>
                        <td>{problem.created_at}</td>
                        <td>
                          <Badge
                            className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400 select-none cursor-pointer"
                            variant="outline"
                            onDoubleClick={() => {
                              setisOpened(true);
                              settype("change");
                              setselected(problem.id);
                              // setcurrent(problem.status == "Открыто" ? "Закрыта" :"Открыта")
                            }}
                          >
                            {problem.status}
                          </Badge>
                        </td>
                      </tr>
                    )
                    :
                    <tr key={problems.id}>
                    <td>{problems.id}</td>
                    <td className="font-medium">{problems.name}</td>
                    <td>{problems.description}</td>
                    <td>{problems.created_at}</td>
                    <td>
                      <Badge
                        className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400 select-none"
                        variant="outline"
                        onDoubleClick={() => {
                          setisOpened(true);
                          settype("change");
                          setselected(problems.id);
                          setcurrent(problems.status == "Открыто" ? "Закрыта" :"Открыта")
                        }}
                      >
                        {problems.status}
                      </Badge>
          
                    </td>
      
                  </tr>
              
                  }
                </tbody>
              </table>
              :
              null
          }
        </div>
      </main>
    </>
  )
}
export default Issues