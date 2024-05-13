import authUser from "@/components/server/Auth";
import { checkCookie } from "@/components/server/CheckCookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useAuth from "./useAuth";
import { fetchTitle } from "@/components/server/FetchJobTitle";
import { allDepMembers } from "@/components/server/getAllDepartment";
import { getUserProjects } from "@/components/server/getUserProjects";


const useProjectData = () =>{
    const [userData, setUserData] = useState<userData | null>(null);
const [status, setStatus] = useState({
  isBoss: false,
  deparmentId: 0
})
const [errorState, setError] = useState({
  status: false,
  text: "",
})
const isServer = typeof window !== 'undefined'
const [projects, setProjects] = useState<project | Array<project> | null>(null)
const [title, setTitle] = useState("")
const [departmentMembers, setDepartmentMembers] = useState<userData[] | null>(null);
const router = useRouter()
const userId: userData = isServer && JSON.parse(localStorage?.getItem('userData') || '{}');
const { data, isLoading, AuthUser } = useAuth()
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
  async function getUserProjectsClient() {
    try {
      const response = await getUserProjects(userId.id);
      if (!response) {
        return
      }
      setProjects(response)
    } catch (error) {
      alert(`${error} on project`,);
    }
  }
const getAll = async () => {
    AuthUser()
          try {
            const response = await authUser();
            setUserData(response.userData);
            setJobTitle(response.userData.job_title_id)
            if (response.userData.position == 'B') {
              const departmentMembers = await allDepMembers(response.userData?.department_id)
              setDepartmentMembers(departmentMembers)
              setStatus({
                isBoss: true,
                deparmentId: response.userData?.department_id
              })
              console.log('departmentMembers', departmentMembers)
              getUserProjectsClient()
            }
            getUserProjectsClient()
          }
          catch (error) {
            setError({ status: true, text: "Ошибка аутентификации пользователя" })
          }
        };
        return {A}
    }