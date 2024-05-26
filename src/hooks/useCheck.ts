
import { getProjectTitle } from "@/components/server/getUserProjects"
import { useEffect, useState } from "react";



export const useCheck =(project_id: number):any=> {
    const [result, setresult] = useState<boolean>(true)
    const checkData= async () => {
        const user_id = JSON.parse(localStorage.getItem('userData') || '{}').id;
        if (!user_id) {
            setresult(false);
            return 
        }
        const project = await getProjectTitle(project_id);
        if (!project || !project.members.includes(user_id)) {
            setresult(false);
            return 
        }
        setresult(true);
    }
    useEffect(()=>{
checkData() 
    },[])
    
    return result
}
export const useId =():any=> {
    const [result, setresult] = useState<boolean>(true)
        const user_id = JSON.parse(localStorage.getItem('userData') || '{}').id;
        if (!user_id) {
            setresult(false);
            return 
        }
return user_id
}
export const useDepartment =():any=> {
    const [result, setresult] = useState<boolean>(true)
        const user_id = JSON.parse(localStorage.getItem('userData') || '{}').department_id;
        if (!user_id) {
            setresult(false);
            return 
        }
return user_id
}