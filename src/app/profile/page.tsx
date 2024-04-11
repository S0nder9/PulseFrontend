'use client'
import authUser from '@/components/server/Auth';
import fetchTitle from '@/components/server/FetchJobTitle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import React, { use, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { checkCookie } from '@/components/server/CheckCookie';
import { getUserProjects, getUserTask } from '@/components/server/getUserProjects';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';


const Profile = () => {
    const [userData, setUserData] = useState<userData | null>(null);
    const [error,setError] = useState(false)
    const [projects,setProjects] = useState<project | Array<project>>()
    const [title, setTitle] = useState("")
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
          setJobTitle(response.userData.job_title_id)
         
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
    if(Array.isArray(response)) {
      response.map((project,id) => {
//реализовать вывод имен а не айдишек
      })
    }
    } catch (error) {
      alert(error);
    }
  }
  async function setJobTitle(id: number) {
    try {
      const title = await  fetchTitle(id);
setTitle(title)
      } 
    catch (error) {
      alert(error);
    }
  }
  /*
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

<Link href='/project/[id]' as={`/project/${projects.id}`}> Перейти</Link>
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
  */
  return (
            <main className="w-full py-6 space-y-6">
              {
                  userData ?  
                  <>
      <section className="container flex flex-col gap-4 px-4 md:gap-10 md:flex-row md:items-center lg:px-6">
        <article className="flex items-center space-x-4">
          <Avatar className="w-12 h-12" />
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold">{userData.first_name} {userData.last_name}</h1>
              <Badge className="text-sm">{userData.job_title_id ? title : null}</Badge>
            </div>
            <dl className="grid gap-1 sm:grid-cols-2">
              <div className="flex items-center space-x-2">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Имя</dt>
                <dd className="font-medium">{userData.first_name}</dd>
              </div>
              <div className="flex items-center space-x-2">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Фамилия</dt>
                <dd className="font-medium">{userData.last_name}</dd>
              </div>
              <div className="flex items-center space-x-2">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Возраст</dt>
                <dd className="font-medium">{userData.age}</dd>
              </div>
            </dl>
          </div>
        </article>
      </section>
      {
      projects ?
      <section className="container">
        <div className="grid max-w-3xl gap-4 px-4 mx-auto lg:grid-cols-2 lg:max-w-5xl lg:gap-8 dark:lg:gap-6">
        {
            Array.isArray(projects) ?
            projects.map((project,index) => 
              <>
          <Card className="grid gap-4 sm:grid-cols-3">
            <CardContent className="col-span-2 space-y-4">
              <article className="space-y-2">
                <h2 className="text-xl font-bold">{project.name}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.description}
                </p>
              </article>
              <div className="grid gap-0.5 sm:grid-cols-2">
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="w-4 h-4 stroke-2.5" />
                 {project.members}
                </div>
          
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-1 sm:justify-end sm:flex-row">
              <Button className="w-full sm:w-auto" variant="outline">
                <Link href='/project/[id]' as={`/project/${project.id}`}>
                View
                </Link>
              </Button>
              <Button className="w-full sm:w-auto" variant="outline">
                Edit
              </Button>
            </CardFooter>
          </Card>
          </>
            ) 
            :
            <Card className="grid gap-4 sm:grid-cols-3">
            <CardContent className="col-span-2 space-y-4">
              <article className="space-y-2">
                <h2 className="text-xl font-bold">{projects.name}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                {projects.description}
                </p>
              </article>
              <div className="grid gap-0.5 sm:grid-cols-2">
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="w-4 h-4 stroke-2.5" />
                  {projects.members}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-1 sm:justify-end sm:flex-row">
              <Button className="w-full sm:w-auto" variant="outline">
                <Link href='/project/[id]' as={`/project/${projects.id}`}>
                View
                </Link>
              </Button>
              <Button className="w-full sm:w-auto" variant="outline">
                Edit
              </Button>
            </CardFooter>
          </Card>
          }
         
        </div>
      </section>
      :
      <>
   <p> У тебя нет проектов</p>
   <Button onClick={getUserProjectsClient}>Обновить</Button>
   </>
}
      </>
      :
      null
}
    </main>
  )
}

export default Profile