import { getUserByPrefixSurname } from "@/components/server/getUserProjects"
import { useEffect, useState } from "react"
type Props ={
    name:string
}
const useUserByPrefix = (props:Props)=>{
    const [users, setusers] = useState<Array<userData> | userData>([])
    useEffect(()=>{
        const getNames = async() =>{
            const users = await getUserByPrefixSurname(props.name)
       setusers(users)
        }
        setTimeout(()=>{
            getNames()
        },1000)
    },[props.name])
    return {users}
}
export default useUserByPrefix