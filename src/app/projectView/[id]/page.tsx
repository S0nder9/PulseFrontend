import Taskspage from '@/components/buildIn/TasksPage';
import { useCheck } from '@/hooks/useCheck';
import React from 'react'

interface Props  {
  params:{id:number}
}

function page({params}: Props) {
  //! Переделать логику под бекенд
  //? Изменить стилизацию в globals.css
  const ableToChange = useCheck(params.id)
  return (
      <Taskspage projectId={params.id} isError={false} ableToChange={ableToChange}/>

  )
}

export default page