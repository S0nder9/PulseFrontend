import React, { useEffect, useState } from 'react'
import { getAllProjectTasks, getProjectTitle } from '../server/getUserProjects';
import { checkCookie } from '../server/CheckCookie';
import { useRouter } from 'next/navigation';
import { beautifyArray, toNames } from '../server/other/fromIdsToNames';
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from '../ui/button';
import Link from 'next/link';

import ThemeSwitcher from './ThemeSwitcher';
import { Package2Icon } from '@/svgs/Svg';
import Navigation from './Navigation';
type Props = {
    projectId: number,
    projectName: string,
    withMenu: boolean,
}

const ProjectData = (props: Props) => {
    const [projectData, setprojectData] = useState<any >({
        id: 0,
        name:props.projectName ,
        description: "",
        members:[],
        created_at: ""
    })
    const [error,setError] =  useState({
        status:false,
        text:""
    })
    const [names, setnames] = useState<any>(null)
    const router  = useRouter()
    useEffect(() => {
        const fetchData = async () => {
            const isToken = await checkCookie()
            if (!isToken) {
                router.push('/login')
                return
            }
            try {
                const projectTitle:project= await getProjectTitle(props.projectId)
               setprojectData(projectTitle)
               const members = await toNames(projectTitle.members)
       setnames(members)
    }
            catch (error) {
             //   throw new Error('error happened while authenticating user')
            setError({status:true, text:`Ошибка аутентификации пользователя`})
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <div>
{
    projectData && !error.status && names ?
    <>
    {
        props.withMenu ?
        <header className=" bg-basic-default  px-6 py-4 flex items-center justify-between ">
        <div className="flex items-center space-x-4">
  <Package2Icon className="h-6 w-6" />
  <h1 className="text-lg text-basic-default font-semibold">{
    projectData.name
  }</h1>
  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">   
   <Link className="hover:underline" href={`/projectView/${props.projectId}`}>
Главная доска
    </Link>
    <Link className="hover:underline" href={`/projectView/${props.projectId}/issues`}>
    Проблемы
    </Link>
    <Link className="hover:underline" href={`/projectView/${props.projectId}/report`}>
Заполнить дневной отчет
    </Link>
  </div>
  <Navigation   />
</div>
</header>
:
<div className="flex items-center space-x-4 bg-transparent ">
    {
        names.map((user:userData) =>
<>
     <Avatar  key={user.id}>
        <AvatarImage alt="" src={user.avatar}  loading='lazy' />
        <AvatarFallback>{user.last_name}</AvatarFallback>
      </Avatar>
    </>
        )
    }
</div>  
    }
    </>
    : 
    null
}
</div>
  )
}

export default ProjectData