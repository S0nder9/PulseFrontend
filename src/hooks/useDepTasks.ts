import { getAllProjectTasks, getAllUserTask, getDepartmentTasks } from "@/components/server/getUserProjects"
import { useEffect, useState } from "react"
import { useIsMounted } from "./useProjectData"
type Props = {
    departmentId: number
}
export const useDepartmentTasks = (props:Props) => { 
    const [tasks, setTasks] = useState<task | Array<task>>([])
    const [error,setError] = useState({
      status:false,
      text:"",
    })
    async function getTasks() {
        try {
            const response = await getDepartmentTasks(props.departmentId)
            setTasks(response)
        }
        catch (error) {
            setError({ status: true, text: `Ошибка сервера` })
        }}

    const isMounted = useIsMounted()
useEffect(() => {
    const fetchData = async () => {
        try {
getTasks()
        }
        catch (error) {
            setError({ status: true, text: `Ошибка сервера` })

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
else {
tasksByStage[tasks.stageAt] = [tasks]
}
    return { tasks: Array.isArray(tasks) ? tasks.slice(0, 10) : tasks, tasksByStage, isMounted, getTasks }
}
