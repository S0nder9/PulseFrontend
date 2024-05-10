'use client'
import { checkCookie } from '@/components/server/CheckCookie'
import { getAllProjectTasks, getProjectTitle, getUserByPrefixSurname } from '@/components/server/getUserProjects'
import { useRouter } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react'
import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import AddTaskDialog from './AddTaskDialog';
import ProjectData from './ProjectData';
import { Button } from '../ui/button';
import ChangeTask from './changeTask';
import { deleteTask } from '../server/deleteObj';
import Loading from './Loading';
import Link from 'next/link';
import { BsArrowBarRight,BsArrowBarLeft} from "react-icons/bs";
import { changeTaskStatus } from '../server/patchData';
import { set } from 'zod';
type Props = {
projectId: number,
isError: boolean
}

const Tasks = (props: Props) => {
  const windowType = typeof window !== 'undefined'

  const userId: userData = windowType ? JSON.parse(localStorage?.getItem('userData') || '{}') : null
const router = useRouter()
const [update, setupdate] = useState(true)
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
    useEffect(() => {
        const fetchData = async () => {
            const isToken = await checkCookie()
            if (!isToken) {
                router.push('/login')
                return
            }
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
  const [projectName, setprojectName] = useState('')
  return (
    <>
            {
      error.status && <div className="flex justify-center flex-col items-center h-screen w-screen  bg-basic-default">
        <h1 className=' text-basic-default'>Возникла ошибка: {error.text} </h1>
        <Link 
        className='text-basic-default   border-base border-4 rounded-xl'
        href='/'
        > Обратно на главную</Link>
        </div>
    }
    <Suspense fallback={<Loading color={'white'} />}>
{
    tasks && !error.status ?
<section className="flex-1 p-4 w-full h-full bg-basic-default text-basic-default">
<div className="flex  justify-between mb-4 ">
  <h1 className="text-2xl font-bold">Доска</h1>
  <ProjectData projectId={props.projectId} projectName={projectName} />        
</div>
<div className="grid grid-cols-3 gap-2">
{
Object.keys(tasksByStage).map(stage => (
<div key={stage}  className=' w-full rounded-lg bg-basic-default text-basic-default p-4 shadow-lg flex flex-col items-center overflow-hidden object-contain'>
<h1>{stage}</h1>
<ScrollArea className="h-[500px] space-x-4 space-y-10 w-full">
                        {tasksByStage[stage].map(task => (

                          <AlertDialog key={task.id} >
                            <div className='  rounded-xl '>
                              <h1>Задача: <i>{task.name}</i></h1>
                              <h1>Описание: {task.description}</h1>
                              <h1>Время: <i>{task.hoursToAccomplish} часов</i></h1>
                              <Label htmlFor='priority'>Приоритет</Label>
                              <Input type='range' value={task.priority} maxLength={10} id="priority" />
                              <div className='  l'>
                                <AlertDialogTrigger className=" pt-0 p-0 m-0 flex  justify-end bg-basic-default">
                                  <Button title='Изменить' className='ml-2' >Изменить</Button>
                                </AlertDialogTrigger>
                                <Button title='Удалить' className='ml-2' onClick={() => {
                                  const sure = confirm('Вы уверены что хотите удалить задачу ?');
                                  if (sure) {
                                    deleteTask(task.id);
                                      setupdate(!update)
                                  }
                                }}>Удалить</Button>

                              </div>
                              {
                                stage == "В обсуждении" &&
                                <Button
                                onClick={
                                  ()=>{
                                    const sure = confirm(`Вы уверены что хотите изменить статус задачи на "В процессе"?`);
                                    if (sure) {
                                    changeTaskStatus(task.id,"В процессе")
                                    setupdate(!update)
                                  }
                                }
                                }>
                                  <BsArrowBarRight />
                                </Button>
                              
                              }
                              {
                                stage =="Готово" &&
                                <Button onClick={
                                  ()=>{
                                    const sure = confirm('Вы уверены что хотите переместить задачу в процессе ?');
                                    if (sure) {
                                    changeTaskStatus(task.id,"В процессе")
                                    setupdate(!update)
                                  }
                                }
                                }>
                                  <BsArrowBarLeft />
                                </Button>
                              }
                             { stage == "В процессе" &&
                             <>
                                    <Button
                                     onClick={
                                      ()=>{
                                        const sure = confirm('Вы уверены что хотите переместить задачу в обсуждение ?');
                                        if (sure) {
                                        changeTaskStatus(task.id,"В обсуждении")
                                        setupdate(!update)
                                      }
                                    }
                                    }>
                                  <BsArrowBarLeft />
                                </Button>
                                  <Button
                                   onClick={
                                    ()=>{
                                      const sure = confirm('Вы уверены что хотите переместить задачу в готово ?');
                                      if (sure) {
                                      changeTaskStatus(task.id,"Готово")
                                      setupdate(!update)
                                    }
                                  }
                                  }>
                                  <BsArrowBarRight />
                                </Button>
                                </>
                                }
                            </div>
                            <ChangeTask task={task} /></AlertDialog>
                        ))}

</ScrollArea>

</div>

))}
</div>

{!error.status && <AddTaskDialog project={props.projectId}/>}
</section>
:
null
} 
</Suspense>
</>

) }

export default Tasks