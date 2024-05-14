import authUser from "@/components/server/Auth";
import { checkCookie } from "@/components/server/CheckCookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { fetchTitle } from "@/components/server/FetchJobTitle";
import { allDepMembers } from "@/components/server/getAllDepartment";
import { getUserProjects } from "@/components/server/getUserProjects";


export const useProjectData = () =>{
    const [userData, setUserData] = useState<userData | null>(null);
    
const [status, setStatus] = useState({
  isBoss: false,
  deparmentId: 0
})
const [errorState, setError] = useState({
  status: false,
  text: "",
})
const [projects, setProjects] = useState<project | Array<project> | null>(null)
const [title, setTitle] = useState("")
const [departmentMembers, setDepartmentMembers] = useState<userData[] | null>(null);
const router = useRouter()
const { data, isLoading, AuthUser } = useAuth()
const isMounted = useIsMounted()
const [loading, setloading] = useState<boolean>()
async function setJobTitle(id: number) {
    try {
      const title = await fetchTitle(id);
      localStorage.setItem('jobTitle', title);
      setTitle(title)
    }
    catch (error) {
      alert(error);
    }
  }
  async function getUserProjectsClient(id: number) {
    try {
      if (id) {
        const response = await getUserProjects(id);
        if (response) {
          setProjects(response);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
        useEffect(() => {  
             AuthUser()
          setloading(false)
          const fetchData = async () => {
            try {
              const response = await authUser();
              setUserData(response.userData);
              setJobTitle(response.userData.job_title_id)
              if(!userData){
  return
              }
              const responseP = await getUserProjects(userData.id);
              if (responseP) {
                setProjects(responseP);
              }
              if (response.userData.position == 'B') {
                const departmentMembers = await allDepMembers(response.userData?.department_id)
                setDepartmentMembers(departmentMembers)
                setStatus({
                  isBoss: true,
                  deparmentId: response.userData?.department_id
                })
              }
            }
            catch (error) {
              setError({ status: true, text: "Ошибка аутентификации пользователя" })
            }
            setloading(true)
          };
          fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
        return {title,departmentMembers,userData,status,errorState,getUserProjectsClient,projects,isMounted,loading}
    }
    export const useIsMounted = () => {
      const [isMounted, setIsMounted] = useState(false);
      useEffect(() => {
          setIsMounted(true);
          return () => setIsMounted(false);
      }, []);
      return isMounted;
  };