import { emploeeHours } from "@/components/server/getUserWorktime";
import { useEffect, useState } from "react"

export const  useWorkTime = (id:number):number | null => {
    const [workTime, setWorkTime] = useState<number | null>(null)

    const getTime= async () => {
        if(!id){
return
        }
        //todo сделать вывод общего времени и показ всех его тасок
        const project = await emploeeHours(id);
        if (!project ) {
throw new Error('no data')
        }
        setWorkTime(project)
    }
    useEffect(()=>{
        getTime() 
    },[])
    
    return workTime

}