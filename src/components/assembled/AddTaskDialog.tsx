import React, { useState } from 'react'
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
import { CgAdd } from 'react-icons/cg'
import { Input } from '../ui/input'
import SelectStage from './SelectStage'
import SearchUser from './searchUser'
import { createTask } from '../server/Create'
import Router  from 'next/router'
type Props = {
    project: number
}

const AddTaskDialog = (props: Props) => {
    const [isAdded, setisAdded] = useState(false)
    const [newTask,setNewTask] = useState<addTask>({
        project_id:0,
        name:'',
  description:'',
  stageAt:"",
hoursToAccomplish:0,
priority:0,
workers:[]
})
const addTask = async()  => {
    newTask.project_id = props.project
    try {
      const response = await createTask(newTask)
      setisAdded(true)
      Router.reload()
      setTimeout(()=>{
        setisAdded(false)
      },2000)
    }
    catch (error) {
      console.log(error)
    }
  
  }
  return (
<AlertDialog  >
<AlertDialogTrigger className='flex  flex-col justify-end float-right text-3xl'><CgAdd  scale={100}/>  Добавить </AlertDialogTrigger>
<AlertDialogContent className='bg-blue-100'>
<AlertDialogHeader>
<AlertDialogTitle className=''>Создать Задачу</AlertDialogTitle>
<AlertDialogDescription>
<Input className="w-full" placeholder="Название задачи" value={newTask.name} onChange={(e)=>setNewTask({...newTask,name:e.target.value})} />
<Input className="w-full" placeholder="Описание задачи" value={newTask.description} onChange={(e)=>setNewTask({...newTask,description:e.target.value})} />
<Input className="w-full" placeholder="Время на выполнение" type='number' value={newTask.hoursToAccomplish} onChange={(e)=>setNewTask({...newTask,hoursToAccomplish:Number(e.target.value)})} />
<Input className="w-full" placeholder="Важность" type='number' maxLength={10}  value={newTask.priority} onChange={(e)=>setNewTask({...newTask,priority:Number(e.target.value)})} />
<SelectStage select={newTask.stageAt}/>
<SearchUser memberIds={newTask.workers}/>
</AlertDialogDescription>
</AlertDialogHeader>
<AlertDialogFooter>
<AlertDialogCancel>Cancel</AlertDialogCancel>
<AlertDialogAction onClick={()=>addTask()}>Continue</AlertDialogAction>
</AlertDialogFooter>
</AlertDialogContent>
</AlertDialog>
  )
}

export default AddTaskDialog