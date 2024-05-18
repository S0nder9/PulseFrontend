'use client'
import { checkCookie } from '@/components/server/CheckCookie'
import { getAllProjectTasks, getProjectTitle, getUserByPrefixSurname } from '@/components/server/getUserProjects'
import { useRouter } from 'next/navigation';
import React, { Suspense, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from '../ui/button';
import Link from 'next/link';
import ThemeSwitcher from '../buildIn/ThemeSwitcher';
import { JSX, SVGProps } from 'react';
import TaskImportance from '../buildIn/TaskImportance';
import ProjectData from './ProjectData';
import Context from '@/utils/ContextProvider';
import Loading from '../buildIn/Loading';
import { useTasks } from '@/hooks/useTasks';
import AlertComponent from './AlertComponent';
import { ArrowLeftIcon, ArrowRightIcon, ChangeIcon, TrashIcon } from '@/svgs/Svg';
type Props = {
projectId: number,
isError: boolean,
ableToChange:boolean
}
interface selec {
  selectedId: number,
  name: string,
  tostatus: string | null,
}
export default function Taskspage(props: Props) {
const [isOpened, setisOpened] = useState(false)
const [selected, setselected] = useState<selec>({
  selectedId: 0,
  name:"",
  tostatus: "" ,
})
  const [type, settype] = useState<"delete" | "change" | "patch" | "add" | null>(null)
const [update, setupdate] = useState(0)
const {tasks,tasksByStage,isMounted,getTasks}= useTasks({projectId:props.projectId})
  return (
    <>
{!isMounted && <Loading/>}
    {
      isOpened && <AlertComponent isOpened={isOpened} update={update}  setupdate={setupdate} project ={props.projectId} setisOpened={setisOpened}  type={type} toStatus={selected.tostatus} name={selected.name} id={selected.selectedId}
      updateState={getTasks}/>
    }
        <ProjectData projectId={props.projectId} projectName='' withMenu={true}/>
    <main className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
      <section className="bg-basic-default rounded-2xl p-4" key={1}>
      <header className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-semibold bg-basic-default">В обсуждении</h2>
                    </header>
{
            Object.keys(tasksByStage).map(stage => (
              <>
                {stage === "В обсуждении" && (
                  <>
                    <div className="space-y-4">
                      {tasksByStage[stage].map(task => (
                        <article className="bg-cards-default rounded-lg p-4 shadow-sm relative" key={task.id}>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-base font-medium">{task.name}</h3>
                            <div className="flex items-center space-x-2">
                                {
                                    props.ableToChange && 
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button
                                    className="p-1"
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => {
                                      setisOpened(true);
                                      settype("change");
                                      setselected({
                                        selectedId: task.id,
                                        name: "",
                                        tostatus: "В процессе",
                                      });
                                    }}
                                  >
                                    <ArrowRightIcon className="h-4 w-4" />
                                  </Button>
                                </AlertDialogTrigger>
                                <Button
                                  className="p-1 rounded-md"
                                  size="icon"
                                  variant="ghost"
                                  onClick={() => {
                                    setisOpened(true);
                                    settype("patch");
                                  }}
                                >
                                  <ChangeIcon className="h-4 w-4" />
                                </Button>
                                <Button
                                  className="p-1"
                                  size="icon"
                                  variant="ghost"
                                  onClick={() => {
                                    setisOpened(true);
                                    settype("delete");
                                    setselected({
                                      selectedId: task.id,
                                      name: "",
                                      tostatus: "",
                                    });
                                  }}
                                >
                                  <TrashIcon className="h-4 w-4" />
                                </Button>
                              </AlertDialog>
                      }
                              <span className="bg-yellow-100 text-yellow-800 dark:text-yellow-900 px-2 mb-8 ml-2.5 rounded-full text-xs font-medium absolute">
                                В обсуждении
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                  {task.description}
                          </p>
                  <TaskImportance value={task.priority} created_at={task.created_at}  toAcc={task.hoursToAccomplish}/>
                        </article>
                      ))}
                    </div>
                  </>
                )}
              </>
            ))
          }
               <div className="mt-4 flex w-full justify-end">
               {
                                    props.ableToChange && 
               <Button size="sm" variant="outline" className="rounded-2xl"
           onClick={() => {
            setisOpened(true);
            settype("add");
            setselected({
              selectedId:0,

              name: "",
              tostatus:"В обсуждении",
            });
          }}>
          Добавить
          </Button>
}
        </div>
    </section>
    <section className="bg-basic-default rounded-2xl p-4" key={2}>
    <header className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold  bg-basic-default ">В процессе</h2>
                    </header>
    {
            Object.keys(tasksByStage).map(stage => (
              <>
                {stage === "В процессе" && (
                  <>
                    <div className="space-y-4">
                      {tasksByStage[stage].map(task => (
                        <article className="bg-cards-default rounded-lg p-4 shadow-sm relative" key={task.id}>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-base font-medium">{task.name}</h3>
                            <div className="flex items-center space-x-2">
                            {
                                    props.ableToChange && 
                              <AlertDialog>
                              <Button
                                    className="p-1"
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => {
                                      setisOpened(true);
                                      settype("change");
                                      setselected({
                                        selectedId: task.id,
                                        name: "",
                                        tostatus:"В обсуждении",
                                      });
                                    }}
                                  >
                                    <ArrowLeftIcon className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    className="p-1"
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => {
                                      setisOpened(true);
                                      settype("change");
                                      setselected({
                                        selectedId: task.id,
                                        name: "",
                                        tostatus: "Готово",
                                      });
                                    }}
                                  >
                                    <ArrowRightIcon className="h-4 w-4" />
                                  </Button>
                                <Button
                                  className="p-1 rounded-md"
                                  size="icon"
                                  variant="ghost"
                                  onClick={() => {
                                    setisOpened(true);
                                    settype("patch");
                                  }}
                                >
                                  <ChangeIcon className="h-4 w-4" />
                                </Button>
                                <Button
                                  className="p-1"
                                  size="icon"
                                  variant="ghost"
                                  onClick={() => {
                                    setisOpened(true);
                                    settype("delete");
                                    setselected({
                                      selectedId: task.id,
                                      name: "",
                                      tostatus: "",
                                    });
                                  }}
                                >
                                  <TrashIcon className="h-4 w-4" />
                                </Button>
                              </AlertDialog>
}
                              <span className="bg-blue-100 dark:bg-blue-200 text-blue-800 dark:text-blue-900 px-2 mb-8 ml-2.5 rounded-full text-xs font-medium absolute">
                  В процессе
                  </span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                  {task.description}
                          </p>
                  <TaskImportance value={task.priority} created_at={task.created_at}  toAcc={task.hoursToAccomplish} />
                        </article>
                      ))}
                    </div>
                  </>
                )}
              </>
            ))
          }
           <div className="mt-4 flex w-full justify-end">
           {
                                    props.ableToChange && 
          <Button size="sm" variant="outline" className="rounded-2xl"
           onClick={() => {
            setisOpened(true);
            settype("add");
            setselected({
              selectedId:0,

              name: "",
              tostatus:"В обсуждении",
            });
          }}>
          Добавить
          </Button>
}
        </div>
          </section>
          <section className="bg-basic-default rounded-2xl p-4" key={3}>
          <header className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold  bg-basic-default ">Готово</h2>
                    </header>
    {
            Object.keys(tasksByStage).map(stage => (
              <>
                {stage === "Готово" && (
                  <>
                    <div className="space-y-4">
                      {tasksByStage[stage].map(task => (
                        <article className="bg-cards-default rounded-lg p-4 shadow-sm relative" key={task.id}>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-base font-medium">{task.name}</h3>
                            <div className="flex items-center space-x-2">
                            {
                                    props.ableToChange && 
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button
                                    className="p-1"
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => {
                                      setisOpened(true);
                                      settype("change");
                                      setselected({
                                        selectedId: task.id,
                                        name: "",
                                        tostatus:"В процессе",
                                      });
                                    }}
                                  >
                                    <ArrowLeftIcon className="h-4 w-4" />
                                  </Button>
                                </AlertDialogTrigger>
                                <Button
                                  className="p-1 rounded-md"
                                  size="icon"
                                  variant="ghost"
                                  onClick={() => {
                                    setisOpened(true);
                                    settype("patch");
                                  }}
                                >
                                  <ChangeIcon className="h-4 w-4" />
                                </Button>
                                <Button
                                  className="p-1"
                                  size="icon"
                                  variant="ghost"
                                  onClick={() => {
                                    setisOpened(true);
                                    settype("delete");
                                    setselected({
                                      selectedId: task.id,
                                      name: "",
                                      tostatus: "",
                                    });
                                  }}
                                >
                                  <TrashIcon className="h-4 w-4" />
                                </Button>
                              </AlertDialog>
}
                              <span className="bg-green-100 dark:bg-green-200 text-green-800 dark:text-green-900 px-2 mb-8 ml-2.5 rounded-full text-xs font-medium absolute">
                  Готово
                  </span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                  {task.description}
                          </p>
                  <TaskImportance value={task.priority} created_at={task.created_at}  toAcc={task.hoursToAccomplish} />
                        </article>
                      ))}
                    </div>
                  </>
                )}
              </>
            ))
          }
               <div className="mt-4 flex w-full justify-end">
               {
                                    props.ableToChange && 
               <Button size="sm" variant="outline" className="rounded-2xl"
           onClick={() => {
            setisOpened(true);
            settype("add");
            setselected({
              selectedId:0,

              name: "",
              tostatus:"В обсуждении",
            });
          }}>
          Добавить
          </Button>
}
        </div>
          </section>
          
    </main>
  </>
)
}

