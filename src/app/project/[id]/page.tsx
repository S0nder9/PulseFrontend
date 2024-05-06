'use client'
import Aside from '@/components/assembled/Aside'
import Loading from '@/components/assembled/Loading'
import Tasks from '@/components/assembled/Tasks'
import { Suspense } from 'react'


interface Props  {
    params:{id:number}
}

const Project = ({ params }: Props) => {
    return (
          <main className="flex h-screen">
<Tasks projectId={params.id}/>
<Aside />
        </main>
    )
}

export default Project