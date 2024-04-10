'use client'
import authUser from '@/components/server/Auth';
import fetchTitle from '@/components/server/FetchJobTitle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import React, { use, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { checkCookie } from '@/components/server/CheckCookie';
import { getUserProjects, getUserTask } from '@/components/server/getUserProjects';


const Profile = () => {
    const [userData, setUserData] = useState<userData | null>(null);
    const [error,setError] = useState(false)
    const [projects,setProjects] = useState<project | Array<project>>()
const router  = useRouter()

    useEffect(() => {
      const fetchData = async () => {
        const isToken =  await checkCookie()
        if(!isToken){
  router.push('/login')
  return
        }
        try {
          const response = await authUser();
          console.log(response);
          setUserData(response.userData);
         
        }
         catch (error) {
        setError(true)
        throw new Error('error happened while authenticating user')
        }
      };
      fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if(userData){
      localStorage.setItem('userData', JSON.stringify(userData))
    }
  async function getUserProjectsClient(id?: any) {
    try {
      const userId:userData = JSON.parse(localStorage?.getItem('userData') || '{}');
      if (!userId) {
        router.push('/login');
        return;
      }

      const response = await getUserProjects(userId.id);
    setProjects(response)
    } catch (error) {
      alert(error);
    }
  }
  return (
<section>
        <div>{userData ?  
             <>
        <nav>
<Link href='/projects/'></Link>
        </nav>
   
        <Avatar className="Avatar">
            <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        <p>{userData.first_name }  {userData. last_name } </p>
        <p> Проекты</p>
        <button onClick={getUserProjectsClient}>Обновить</button>
    {
      projects?
        <div className='flex-row'>
            {
            Array.isArray(projects) ?
            projects.map((project,index) => 
                    <div key={index} className=' flex-row'>
                        <Link href='/project/[id]' as={`/project/${project.id}`}>
                         Перейти
                        </Link> 
                          <a>{project.name}</a>
                    </div>
              
            )
            :
            <div>

<Link href='/project/[id]' > Перейти</Link>
<p>{projects.name}</p>
</div>          }
        </div>
        :

       <p> У тебя нет проектов</p>
    }
</>
         :
        <h1>
            {error? 'error happened' : 'loading'}
            </h1>}</div>
</section>
  )
}

export default Profile