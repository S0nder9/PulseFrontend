"use client"
import React,{useState} from 'react'
import { deleteTask } from '../server/deleteObj'
import { changeTaskStatus } from '../server/patchData'
import SearchUser from './searchUser'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  } from "@/components/ui/select"
  import { createTask } from '../server/Create'
import { CgAdd } from 'react-icons/cg'
import { Input } from '../ui/input'
import TaskImportance from './TaskImportance'
import { Label } from '../ui/label'
type Props = {
    isOpened:boolean,
    setisOpened:React.Dispatch<React.SetStateAction<boolean>>
    type:string | null,
    toStatus:string | null,
    name:string | null,
    id:number | null,
    project:number | null,
    update:number,
    setupdate:React.Dispatch<React.SetStateAction<number>>,
    updateState:()=>void
}

function AlertComponent(props: Props) {
  const [newTask, setNewTask] = useState<addTask>({
    project_id: 0,
    name: '',
    description: '',
    stageAt: "",
    hoursToAccomplish: 0,
    priority: 0,
    workers: []
  })
  const addTask = async () => {
    if (props.project) {
      newTask.project_id = props.project
    }
    if (newTask.stageAt == '') {
      throw new Error("")
    }
    const userId: userData = JSON.parse(localStorage?.getItem('userData') || '{}');
    newTask.workers.push(userId?.id)
    const res = await createTask(newTask)
    if (!res) {
      throw new Error("Task not created")
    }
    props.setisOpened(false)
    props.updateState()
    // props.setupdate(props.update++)
  }
  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 w-full  ">
      <div className="mx-4 w-full max-w-md rounded-2xl p-6 shadow-lg bg-basic-default">
        {props.type === "add" && (
          <section className=" h-fit w-full overflow-y-scroll md:overflow-y-hidden xl:overflow-y-hidden" >
            <div className="mb-4">
              <h2 className="text-2xl font-bold bg-basic-default ">Добавить задачу </h2>
            </div>
            <div className="mb-6 ">
              <p className=" text-basic-default mt-6">
                <Input className="w-full  rounded-xl" placeholder="Название задачи" value={newTask.name} onChange={(e) => setNewTask({ ...newTask, name: e.target.value })} />
                <textarea className="w-full mt-5 rounded-xl bg-basic-default  text-basic-default" placeholder="Описание задачи" value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} />
                <Label htmlFor='time'>Часов для окончания</Label>
                <Input className="w-full  rounded-xl" placeholder="Время на выполнение" id="time" type='number' value={newTask.hoursToAccomplish} onChange={(e) => setNewTask({ ...newTask, hoursToAccomplish: Number(e.target.value) })} />
                <Input className="w-full  mt-5  rounded-xl mb-5" placeholder="Важность" type='number' maxLength={10} value={newTask.priority} onChange={(e) => setNewTask({ ...newTask, priority: Number(e.target.value) })} />
                <TaskImportance value={newTask.priority} toAcc={newTask.hoursToAccomplish}  created_at={''}/>
                <Select onValueChange={(value: any) => { setNewTask({ ...newTask, stageAt: value }) }} value={newTask.stageAt}
                >
                  <SelectTrigger className=' rounded-xl'>
                    <SelectValue placeholder="Стадия задачи" />
                  </SelectTrigger>
                  <SelectContent className=' bg-basic-default  rounded-xl'>
                    <SelectItem value="Готово">Готово</SelectItem>
                    <SelectItem value="В процессе">В процессе</SelectItem>
                    <SelectItem value="В обсуждении">В обсуждении</SelectItem>
                  </SelectContent>
                </Select>
              </p>
              <SearchUser memberIds={newTask.workers} />
            </div>
            <div className="flex justify-between">
              <button className="rounded-md bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800"
                onClick={() => props.setisOpened(false)}>
                Закрыть
              </button>
              <button className="rounded-md bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800"
                onClick={() => {
                  addTask()
                }}>
                Создать
              </button>
            </div>
          </section>
        )}
        {props.type === "patch" && (
          <>
            <div className="mb-4">
              <h2 className="text-2xl font-bold">Важное сообщение изменить</h2>
            </div>
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                Это важное сообщение, которое требует вашего внимания. Пожалуйста, ознакомьтесь с ним.
              </p>
            </div>
            <div className="flex justify-between">
              <button className="rounded-md bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800"
                onClick={() => props.setisOpened(false)}>
                Закрыть
              </button>
              <button className="rounded-md bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800">
                Принять
              </button>
            </div>
          </>
        )}
        {props.type === "delete" && (
          <>
            <div className="mb-4">
              <h2 className="text-2xl font-bold">Удалить задачу?</h2>
            </div>
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                После удаление , вы не сможете ее восстановить
              </p>
            </div>
            <div className="flex justify-between">
              <button className="rounded-md bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800"
                onClick={() => props.setisOpened(false)}>
                Нет
              </button>
              <button className="rounded-md bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800"
                onClick={() => {
                  if (props.id) {
                    const res = deleteTask(props.id)
                    if (!res) {
                      throw new Error("Ошибка удаления")
                    }
                    alert("Задача удалена")
                    props.setisOpened(false)
                    props.updateState()
                    //  props.setupdate(props.update++)
                  }
                }}
              >
                Да
              </button>
            </div>
          </>
        )}
        {props.type === "change" && (
          <div className="mx-4 w-full max-w-md rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <div className="mb-4">
              <h2 className="text-2xl font-bold w-full">Изменить статус на {props.toStatus}</h2>
            </div>
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                Статус задачи будет сменен
              </p>
            </div>
            <div className="flex justify-between">
              <button className="rounded-md bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800"
                onClick={() => props.setisOpened(false)}>
                Нет
              </button>
              <button className="rounded-md bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800"
                onClick={() => {
                  if (props.id && props.toStatus) {
                    const res = changeTaskStatus(props.id, props.toStatus)
                    if (!res) {
                      throw new Error("")
                    }
                    alert(`Задача перемещена ${props.toStatus}`)
                    props.setisOpened(false)
                    props.updateState()
                    // props.setupdate(props.update++)
                  }
                }}>
                Да
              </button>

            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AlertComponent