import { getUserProjects } from "@/components/server/getUserProjects";
import { useState } from "react";

const useProject= (id:number) =>{
        const [isLoading, setIsLoading] = useState<boolean >();
        const [error, setError] = useState(null);
        const [projects, setProjects] = useState<project | Array<project> | null>(null)
        if(!id){
            return null;
            }
    const getProjects = async() =>{
        try {
            const response = await getUserProjects(id);
if(!response){
    throw new Error("Could not get")
}
setProjects(response)
        } catch (error) {
          console.log(error);
        }
    }
    
        return {projects,isLoading,error,getProjects}
}
export default useProject