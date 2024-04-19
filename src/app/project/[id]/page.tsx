'use client'
import { checkCookie } from '@/components/server/CheckCookie'
import { getAllProjectTasks, getUserByPrefixSurname } from '@/components/server/getUserProjects'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CgAdd } from "react-icons/cg";
import React, { useEffect, useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import authUser from '@/components/server/Auth'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'


interface Props  {
    params:{id:number}
}

const Project = ({ params }: Props) => {
  const userId: userData = JSON.parse(localStorage?.getItem('userData') || '{}');
    const projectId = params.id
    const [tasks, setTasks] = useState<task | Array<task>>([])
    
    const [createTask, setcreateTask] = useState({
      name:"",
      description:"",
      priority:0,
      hoursToAccomplish:0,
      workers:[
          {
              id:0,
              name:"",
              surname:""
          }
      ]
  })
    const router = useRouter()
    const [userData, setUserData] = useState<any>(null);
    const [name,setName] = useState('')
    const [membersIds, setmembersIds] = useState<Array<number>>([userId.id])
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
              const responseUser= await authUser();

              setUserData(responseUser.userData);
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
const [isAdded, setisAdded] = useState(false)
const addTask = ()  => {
setisAdded(!isAdded)
alert(isAdded)
}
const handleSelectUser = (user: userData) => {

  
  setmembersIds((prevIds) => [...prevIds, user.id])
  }
  //завтра добавить логику изменения таски , а также добавить другие фичи
    return (
          <main className="flex h-screen">
            <aside className=" w-1/6 flex flex-col items-center">
            <div>
        <h2>{userData ?             <h2>{userData. first_name }  {userData. last_name } </h2> :null}</h2>
        <h2>{localStorage.getItem('jobTitle')}</h2>
        </div>
            </aside>
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
          <ScrollArea className="h-[500px] space-x-4">
            {tasksByStage[stage].map(task => (
              <>
     
              <AlertDialog key={task.id}><AlertDialogTrigger className="ADTrigger">
              <h1>Задача: <i>{task.name}</i></h1>
              <h1>Проект: <i>{task.project_id}</i></h1>
              <h1>Время: <i>{task.hoursToAccomplish}</i></h1></AlertDialogTrigger>
              <AlertDialogContent className="AlertDialogContent"> 
      <AlertDialogHeader className="AlertDialogHeader"><AlertDialogCancel className="AlertDialogCancel">×</AlertDialogCancel><AlertDialogTitle className="label">Задача: <b>{task.name}</b></AlertDialogTitle></AlertDialogHeader>
      <AlertDialogDescription className="AlertDialogDescription">
        Описание: {task.description}
      </AlertDialogDescription><AlertDialogDescription className="AlertDialogDescription"> Проект: <b>{task.project_id}</b>
      </AlertDialogDescription><AlertDialogDescription className="AlertDialogDescription"> Время на выполнения: <b>{task.hoursToAccomplish}</b></AlertDialogDescription>
              </AlertDialogContent></AlertDialog>
              </>
            ))}
   </ScrollArea>

<AlertDialog  >
  <AlertDialogTrigger> Добавить<CgAdd /></AlertDialogTrigger>
  <AlertDialogContent className='bg-blue-100'>
    <AlertDialogHeader>
      <AlertDialogTitle className=''>Создать Задачу</AlertDialogTitle>
      <AlertDialogDescription>
    <Input className="w-full" placeholder="Название задачи" />
    <Input className="w-full" placeholder="Описание задачи" />
    <Input className="w-full" placeholder="Время на выполнение" type='number' />
<Input className="w-full" placeholder="Важность" type='number' maxLength={10} />
<div className="flex space-x-4">
                <h1>Добавлены :</h1>
            
            </div>
<Label htmlFor="participants">Поиск сотрудника</Label>
           <Input  id='participants' className="" placeholder="Введите Фамилию" value ={name} onChange={(e) => setName(e.target.value)}/>

           <div title="">
          { Array.isArray(users) ?
          users.map((user) => (
               <p key={user.id}  onClick={() => handleSelectUser(user)} >
                 {user.first_name} {user.last_name} 
               </p>
             ))
             :
              <p key={users.id}  >
                {users.first_name} {users.last_name} <Button onClick={() => handleSelectUser(users)}>Добавить</Button>
              </p>
            }
           </div>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>         
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