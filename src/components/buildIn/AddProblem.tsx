import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    } from "@/components/ui/select"
    import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { createProblem } from '../server/Create'
import { changeProblemStatus } from '../server/patchData'
import { useIssues } from '@/hooks/useIssues'

    type Props = {
        isOpened:boolean,
        setisOpened:React.Dispatch<React.SetStateAction<boolean>>
        type:string | null,
        id:number | null,
        project:number | null,
        current:string,
        reloadPageF:() =>void,
    }


function AddProblem(props: Props) {
    const [newProblem, setnewProblem] = useState<addProblem>({
        project_id: 0,
        name: '',
        description: '',
        status:"",
        author:0
      })
  const addProblem = async () => {
    const user: userData = JSON.parse(localStorage?.getItem('userData') || '{}');
if(props.project ){
    newProblem.project_id = props.project
    newProblem.author = user.id !== null ? user.id : 0; // Присвоить 0, если user.id равно null
    newProblem.status = "Открыто"
    console.log(newProblem)
}
    const res = await createProblem(newProblem)
    if (!res) {
      throw new Error("Problem not created")
    }
    props.setisOpened(false)
    props.reloadPageF()
    // props.setupdate(props.update++)
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 w-full  ">
    <div className="mx-4 w-full max-w-md rounded-2xl p-6 shadow-lg bg-basic-default">
      {props.type === "add" && (
        <section className=" h-fit w-full " >
          <div className="mb-4">
            <h2 className="text-2xl font-bold bg-basic-default ">Добавить задачу </h2>
          </div>
          <div className="mb-6 ">
            <p className=" text-basic-default mt-6">
              <Input className="w-full  rounded-xl" placeholder="Название задачи" value={newProblem.name} onChange={(e) => setnewProblem({ ...newProblem, name: e.target.value })} />
              <textarea className="w-full mt-5 bg-basic-default" placeholder="Описание задачи" value={newProblem.description} onChange={(e) => setnewProblem({ ...newProblem, description: e.target.value })} />
        </p>
          </div>
          <div className="flex justify-between">
            <button className="rounded-md bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800"
              onClick={() => props.setisOpened(false)}>
              Закрыть
            </button>
            <button className="rounded-md bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800"
              onClick={() => {
                addProblem()
              }}>
              Создать
            </button>
          </div>
        </section>
                )}
                {props.type =="change" &&
                <>
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold w-full">Изменить статус на {props.current}</h2>
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
                        if (props.id && props.current) {
                          const res = changeProblemStatus(props.id, "Закрыто")
                          if (!res) {
                            throw new Error("")
                          }
                          props.setisOpened(false)
                          alert(res)
                          props.reloadPageF()
                          // props.setupdate(props.update++)
                        }
                      }}>
                      Да
                    </button>
      
                  </div>
                  </>
                }
        </div>
        </div>
  )
}

export default AddProblem