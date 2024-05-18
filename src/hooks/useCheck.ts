import { getProjectTitle } from "@/components/server/getUserProjects"
import { useState } from "react";



export const useCheck =(project_id: number):boolean=> {
    const [result, setresult] = useState<boolean>(false)
    const checkData= async () => {
        const user_id = JSON.parse(localStorage.getItem('user') || '{}').id;
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
    checkData()
    return result
}