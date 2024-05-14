'use client'
import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button';
import Navigation from '@/components/buildIn/Navigation';
import UserProfile from '@/components/buildIn/UserProfile';
import DpMembers from '@/components/buildIn/DpMembers';
import ProjectsCard from '@/components/buildIn/ProjectsCard';
import { useProjectData } from '@/hooks/useProjectData';
import Loading from '@/components/buildIn/Loading';
//TODO РАЗБИТЬ ВСЕ НА КОМПОНЕНТЫ , А ТАКЖЕ ДОБАВИТЬ ЗАГРУЗКУ И ОБРАБОТКУ ОШИБОК
//& ДОБАВИТЬ ISSUES КАК ПРИЯТНОЕ ДОПОЛНЕНИЕ ОТВЕРСТАТЬ ГЛАВНУЮ СТРАНИЦУ
//? ИСПРАВИТЬ ВСЕ НЕДОЧЕТЫ ГОТОВИТЬСЯ ДЕЛАТЬ СТРАНИЦУ ОТЧЕТА

const Profile = () => {
  //! Сделать нормальную загрузку
  const { title, departmentMembers, userData, status, errorState, getUserProjectsClient, projects, isMounted } = useProjectData()
  //! фиксануть ошибку не авторендерига
  return (
    <>
      <Navigation isBoss={false} idOfDep={status.deparmentId} isImage={false} />
      {
        !isMounted && <Loading />
      }
      <main className="bg-[#0D1117] min-h-screen text-white ">
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row">
          {
            userData ?
              <>

                <UserProfile
                  userData={userData} title={title} />
                <section className="flex flex-col flex-grow  p-8 space-y-6">
                  {
                    departmentMembers && <DpMembers departmentMembers={departmentMembers} />
                  }
                  {
                    projects ?
                      <ProjectsCard projects={projects} />
                      :
                      <>
                        <p> У тебя нет проектов</p>
                        <Button onClick={()=>getUserProjectsClient(userData.id)} className='flex justify-center'>Обновить</Button>

                      </>
                  }
                </section>
              </>
              :
              null
          }
        </div>
      </main>
    </>
  )
}

export default Profile