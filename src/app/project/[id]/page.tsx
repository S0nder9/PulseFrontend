'use client'
import Aside from '@/components/assembled/Aside'
import Loading from '@/components/assembled/Loading'
import Tasks from '@/components/assembled/Tasks'
import Navigation from '@/components/buildIn/Navigation'
import { Suspense, useState } from 'react'


interface Props  {
    params:{id:number}
}

const Project = ({ params }: Props) => {
    const [error,setError] = useState({
        status:false,
        text:"Ошибка запроса к серверу",
      })
      //TODO ДОБАВВИТЬ ВОЗМОЖНОСТЬ МЕНЯТЬ СТАДИЮ ТАСКИ ПОСРЕДСТВОМ КНОПОК
    //TODO не разрешать редачить если ты не в проекте
      return (
        <>
        <Suspense fallback={<Loading color='#FA8072'/>}>
            <Navigation isBoss={false} idOfDep={0} isImage={true}/>
          <main className="flex h-screen">
<Tasks projectId={params.id} isError={error.status}/>
{/* <Aside /> */}
        </main>
        </Suspense>
        </>
    )
}

export default Project