'use client'
import authUser from '@/components/server/Auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import React, { Suspense, use, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { checkCookie } from '@/components/server/CheckCookie';
import { getUserName, getUserProjects, getUserTask } from '@/components/server/getUserProjects';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { beautifyArray, toNames } from '@/components/server/other/fromIdsToNames';
import { fetchTitle } from '@/components/server/FetchJobTitle';
import { deleteProject, deleteUser } from '@/components/server/deleteObj';
import Loading from '@/components/assembled/Loading';
import { allDepMembers } from '@/components/server/getAllDepartment';
//TODO РАЗБИТЬ ВСЕ НА КОМПОНЕНТЫ , А ТАКЖЕ ДОБАВИТЬ ЗАГРУЗКУ И ОБРАБОТКУ ОШИБОК
//& ДОБАВИТЬ ISSUES КАК ПРИЯТНОЕ ДОПОЛНЕНИЕ ОТВЕРСТАТЬ ГЛАВНУЮ СТРАНИЦУ
//? ИСПРАВИТЬ ВСЕ НЕДОЧЕТЫ ГОТОВИТЬСЯ ДЕЛАТЬ СТРАНИЦУ ОТЧЕТА
const Profile = () => {
    const [userData, setUserData] = useState<userData | null>(null);
    const [error,setError] = useState({
      status:false,
      text:"",
    })
    const [projects,setProjects] = useState<project | Array<project> | null>(null)
    const [title, setTitle] = useState("")
    const [departmentMembers,setDepartmentMembers]  = useState<any>(null)
const router  = useRouter()
const userId: userData = JSON.parse(localStorage?.getItem('userData') || '{}');
    useEffect(() => {

      const fetchData = async () => {
        const isToken =  await checkCookie()
        if(!isToken){
  router.push('/login')
  return
        }
        try {
          const response = await authUser();
          setUserData(response.userData);

          setJobTitle(response.userData.job_title_id)
      if (response.userData.position =='B'){
        const departmentMembers = await allDepMembers(response.userData?.department_id)
        setDepartmentMembers(departmentMembers)
        console.log('departmentMembers', departmentMembers)
      }
          if (!userId) {
            router.push('/login');
            return;
          }
          getUserProjectsClient()
        }
         catch (error) {
        setError({status:true, text:"Ошибка аутентификации пользователя"})
      //  throw new Error('error happened while authenticating user')
        }
      };
      fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if(userData){
      localStorage.setItem('userData', JSON.stringify(userData))
    }
  async function getUserProjectsClient() {
    try {
      const response = await getUserProjects(userId.id);
      if (Array.isArray(response)) {
        response.map(async (item)=>{
          const names = await toNames(item.members);
          const beautifulNames = beautifyArray(names); 
          setProjects(response.map(project => ({ ...project, true_members: beautifulNames })));
        })
      } else {
        const names = await toNames(response.members);
          const beautifulNames = beautifyArray(names); 
          setProjects({...response,true_members:beautifulNames});
     console.log(projects)
      }
    } catch (error) {
      alert(`${error} on project`,);
    }
  }
  async function setJobTitle(id: number) {
    try {
    
      const title = await  fetchTitle(id);
      localStorage.setItem('jobTitle', title);
setTitle(title)
      } 
    catch (error) {
      alert(error);
    }
  }
async function ifIsBoss(){
  const allDepartment = allDepMembers(userId.department_id)
  setDepartmentMembers(allDepartment)
  alert("")
}
  return (          
  <Suspense fallback={<Loading color='#FA8072'/>}>
    {
      error.status && <div className="flex justify-center items-center h-screen">
        <h1>Возникла ошибка: {error.text} </h1>
        </div>
    }
            <main className="w-full py-6 space-y-6">

              {
                  userData ?  
                  <>
                  <nav className=' w-full h-1/4 bg-slate-100  flex space-x-5'>
<Link href='/project/create' >Создать проект </Link>
<Link href='/'>На главную</Link>
<Link href='/searchProject'>Найти проект</Link>
<Link href='/searchEmployee'>Узнать информацию по сотруднику </Link>
                  </nav>
      <section className="container flex flex-col gap-4 px-4 md:gap-10 md:flex-row md:items-center lg:px-6">
        <article className="flex items-center space-x-4">
          <Avatar className="w-12 h-12">
          <AvatarImage src={userData.avatar} />
  <AvatarFallback>CN</AvatarFallback>
          </Avatar>
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
                <dd className="font-medium">{userData.position}</dd>  
              </div>
            </dl>
          </div>
        </article>
        
<div className='  w-full '>
      {
        departmentMembers ?
        departmentMembers.map((user:any)=>
          <section key={user.id}>
            <div className='grid grid-cols-2 w-96 '>
              {/* <div>
                <img src={user.avatar} className='h-16 w-16 rounded-full'/>
              </div> */}
              <div className='p-4 w-96'>  
                <h1>{user.first_name} {user.father_name} {user.last_name}  </h1>
                <h1>Должность: {user.position}</h1>
                <h1>Проекты: {user.job_title_id}</h1>
              </div>
            </div>
            <div>
            <Button className="w-full sm:w-auto" onClick={() => {
  const sure = confirm('Вы уверены что хотите удалить работника?');
  if (sure) {
  deleteUser(user.id);
  }}}>Удалить</Button>
            </div>
        
  
          </section>
        )
        :
        null
      }
</div>
      </section>
      {
      projects ?
      <section className="mt-10">
        <div className="grid max-w-6xl gap-4 px-4 mx-auto lg:grid-cols-2 lg:max-w-5xl lg:gap-8 dark:lg:gap-6">
        {
            Array.isArray(projects) ?
                        projects.map((project, index) =>
                          <div key={index} className='flex-row'>
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
                                    <div className=" flex" >
                                  {project.true_members.length > 1 ? project.true_members : "nety ego"}
                                  </div>

                                </div>
                                </div>
                              </CardContent>
                              <CardFooter className="flex flex-col gap-1 sm:justify-end sm:flex-row">
                                <Button className="w-full sm:w-auto">
                                  <Link href='/project/[id]' as={`/project/${project.id}`}>
                                Посмотреть
                                  </Link>
                                </Button>
                                <Button className="w-full sm:w-auto" onClick={() => {
const sure = confirm('Вы уверены что хотите удалить проект ?');
if (sure) {
deleteProject(project.id);
}
}}>              
Удалить
                                </Button>
                          
                              </CardFooter>
                            </Card>
                          </div>
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
                  <div className=" flex" >
                {projects.true_members.length > 1 ? projects.true_members : "nety ego"}
                </div>

              </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-1 sm:justify-end sm:flex-row">
              <Button className="w-full sm:w-auto">
                <Link href='/project/[id]' as={`/project/${projects.id}`}>
              Посмотреть
                </Link>
              </Button>
              <Button className="w-full sm:w-auto" onClick={() => {
const sure = confirm('Вы уверены что хотите удалить проект ?');
if (sure) {
deleteProject(projects.id);
}
}}>              
Удалить
              </Button>
        
            </CardFooter>
          </Card>
          }
         
        </div>
      </section>
      :
      <>
   <p> У тебя нет проектов</p>
   <Button onClick={getUserProjectsClient } className='flex justify-center'>Обновить</Button>
  
   </>
}
      </>
      :
      null
}

    </main>
    </Suspense>
  )
}

export default Profile