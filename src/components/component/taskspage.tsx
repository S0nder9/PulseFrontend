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
import AlertComponent from '../buildIn/Alert';
import ThemeSwitcher from '../buildIn/ThemeSwitcher';
import { JSX, SVGProps } from 'react';
import TaskImportance from '../buildIn/TaskImportance';
import ProjectData from '../assembled/ProjectData';
import Context from '@/utils/ContextProvider';
type Props = {
projectId: number,
isError: boolean
}
interface selec {
  selectedId: number,
  name: string,
  tostatus: string | null,
}
export default function   Taskspage(props: Props) {
const [isOpened, setisOpened] = useState(false)
const [selected, setselected] = useState<selec>({
  selectedId: 0,
  name:"",
  tostatus: "" ,
})
  const [type, settype] = useState<"delete" | "change" | "patch" | "add" | null>(null)
  const windowType = typeof window !== 'undefined'

  const userId: userData = windowType ? JSON.parse(localStorage?.getItem('userData') || '{}') : null
const router = useRouter()
const [update, setupdate] = useState(0)
// setTimeout(() => {
// setupdate(!update)
// },10000)
    const [tasks, setTasks] = useState<task | Array<task>>([])
    const [name,setName] = useState('')
    const [error,setError] = useState({
      status:false,
      text:"",
    })
    const [membersIds, setmembersIds] = useState<Array<number>>([userId?.id])
    const [users, setusers] = useState<Array<userData> | userData>([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
      const getNames = async() =>{
          const users = await getUserByPrefixSurname(name)
     setusers(users)
      }
      if(name.length < 1){
return
      }
      setTimeout(()=>{
          getNames()
      },1000)
  },[name])

const bask = useCallback(
  async() => {
    const isToken = await checkCookie()
    if (!isToken) {
        router.push('/login')
        return
    }
  },
  []
)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllProjectTasks(props.projectId)
                setTasks(response)
            }
            catch (error) {
              setError({status:true, text:`Ошибка сервера`})
          
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [update]);
    const tasksByStage: { [stage: string]: task[] } = {};
    if(Array.isArray(tasks)){
    tasks.forEach(task => {
      if (!tasksByStage[task.stageAt]) {
        tasksByStage[task.stageAt] = [];
      }
      tasksByStage[task.stageAt].push(task);
    });
}
else {
  tasksByStage[tasks.stageAt] = [tasks]
}
const handleSelectUser = (user: userData) => {
  setmembersIds((prevIds) => [...prevIds, user.id])
  }
  return (
    <>
    {/* {
      isLoading && <Loading/>
    } */}
    {
      isOpened && <AlertComponent isOpened={isOpened} update={update}  setupdate={setupdate} project ={props.projectId} setisOpened={setisOpened}  type={type} toStatus={selected.tostatus} name={selected.name} id={selected.selectedId}/>
    }
        {/* <header className=" bg-basic-default dark:bg-gray-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Package2Icon className="h-6 w-6" />
            <h1 className="text-lg text-basic-default font-semibold">Имз Аутентификация</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <Link className="hover:underline" href="#">
              Проблемы
              </Link>
              <Link className="hover:underline" href="#">
             Развитие проекта
              </Link>
              <ThemeSwitcher/> 
            </div>
          </div>
          <div className="flex items-center space-x-4">

            <Avatar>
              <AvatarImage alt="Shuding" src="https://flomaster.top/uploads/posts/2022-07/1658190796_32-flomaster-club-p-muzhchina-v-ochkakh-risunok-krasivo-37.jpg" />
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage alt="John Doe" src="https://distribution.faceit-cdn.net/images/767a1efb-0326-424e-ba8c-dd8e3b7f1be4.jpeg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage alt="Oliver Maguire" src="https://pushinka.top/uploads/posts/2023-03/1680122627_pushinka-top-p-khvkh-avatarki-pinterest-46.jpg " />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage alt="Lily Wang" src="/avatars/04.png" />
              <AvatarFallback>LW</AvatarFallback>
            </Avatar>
          </div>
        </header> */}
        <ProjectData projectId={props.projectId} projectName='' withMenu={true}/>
    <main className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
      <section className="bg-basic-default rounded-2xl p-4">
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
        </div>
    </section>
    <section className="bg-basic-default rounded-2xl p-4">
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
        </div>
          </section>
          <section className="bg-basic-default rounded-2xl p-4">
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
        </div>
          </section>
          
    </main>
  </>
)
}


function ArrowLeftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function ArrowRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
return (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)
}


function ChangeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
return (
  <svg
  className="w-6 h-6"
  fill="none"
  stroke="currentColor"
  strokeWidth={1.5}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
)
}


export function Package2Icon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
return (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
    <path d="M12 3v6" />
  </svg>
)
}


function TrashIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
return (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
  </svg>
)
}