import { getAllProjectIssues } from "@/components/server/getUserProjects"
import { useEffect, useState } from "react"
import { useIsMounted } from "./useGetUserData"

export const useIssues = (prId:number)=>{
    const [problems, setproblems] = useState<problem[] | null | problem>(null)
    const isMounted  = useIsMounted()
    const getAllProblemsClient = async () => {
      const response = await getAllProjectIssues(prId)
      setproblems(response)
      console.log(problems)
    }
    useEffect(() => {
        getAllProblemsClient()
      }, [])
   return {isMounted,problems,getAllProblemsClient}
}