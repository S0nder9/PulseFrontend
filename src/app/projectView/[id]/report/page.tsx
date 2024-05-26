"use client"
import React, {  useState } from 'react'
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Navigation from '@/components/buildIn/Navigation'
import { useTasks } from '@/hooks/useTasks'
import { sendReportP } from '@/components/server/sendReport'
import { useId } from '@/hooks/useCheck'
import { set } from 'zod'
type Props = {
    params:{
      id:number
    }
  }

function ReportSend(props: Props) {
    const {tasks,tasksByStage,isMounted,getTasks}= useTasks({projectId:props.params.id})
    const [isAdded, setisAdded] = useState(false)
    const id = useId()
    const [data, setdata] = useState<sendReport>({
    user_id:parseInt(id),
    work_type:"T",
   work_id:0,
    work_time:0,
    })
const sendReportClient = async () => {
    console.log(data)
const response= await sendReportP(data)
setisAdded(response)
if(response){
    setdata({
    user_id:parseInt(id),
    work_type:"T",
   work_id:0,
    work_time:0,
    })
}

}
//todo добить отправку репорта
  return (
    <div className=' min-h-screen w-full bg-main-base  overflow-y-hidden'>
    <section className="w-full max-w-md mx-auto p-6 md:p-8 bg-basic-default  pt-12 shadow-md rounded-2xl">
    <Navigation/>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold ">Отчет о проделанной  работе </h1>
        <p className="text-gray-500 dark:text-gray-400">        { new Date().toLocaleString('ru-RU', {year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
        <div className="grid gap-2 rounded-2xl ">
            {
                tasks &&
                Array.isArray(tasks) ? 
                <Select defaultValue="task1" 
                onValueChange={ (e) =>{
                    setdata({...data, work_id: parseInt(e) })
                }}>
                <SelectTrigger className='rounded-xl'>
                  <SelectValue placeholder="Select task" />
                </SelectTrigger>
                <SelectContent className=' bg-cards-base rounded-2xl'
                    
                >
                {
                                            tasks.map((task, index) => {
                                                return <SelectItem key={task.id}  value={task.id.toString()} 
                                        
                                                >{task.name} | {task.stageAt}</SelectItem>
                                            })
                }
            
                </SelectContent>
              </Select>
              :
              <Select defaultValue="task1" >
              <SelectTrigger className='rounded-xl'>
                <SelectValue placeholder="Select task" />
              </SelectTrigger>
              <SelectContent className=' bg-cards-base'>
              <SelectItem value={tasks!.id.toString()} key={tasks.id}>{tasks.id}</SelectItem>
              </SelectContent>
              </Select>
            }

        </div>
        <div className="grid gap-2">
          <Label htmlFor="time">Затраченное время</Label>
          <Input id="time" min="0" placeholder="Введите затраченное время в часах" step="1  " type="number"
          value={data.work_time} onChange={(e) => {
                setdata({...data, work_time: parseFloat((e.target as HTMLInputElement).value) })
            }}
          className='rounded-xl' />
        </div>
        <Button className="w-full  hover:bg-black/50"  onClick={sendReportClient} type='button'>
         Отправить
        </Button>
        {
isAdded && <h1 className=' text-center'>Репорт успешно отправлен</h1>
        }
    </section></div>

  )
}

export default ReportSend