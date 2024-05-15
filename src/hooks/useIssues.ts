import { getAllProjectIssues } from "@/components/server/getUserProjects"
import { useEffect, useState } from "react"
import { useIsMounted } from "./useGetUserData"

export const useIssues = (prId:number)=>{
    const [problems, setproblems] = useState<problem[] | null | problem>(null)
    const isMounted  = useIsMounted()
    useEffect(() => {
        const getAllProblemsClient = async () => {
          const response = await getAllProjectIssues(1)
          setproblems(response)
          console.log(problems)
        }
        getAllProblemsClient()
      }, [])
   return {isMounted,problems}
}