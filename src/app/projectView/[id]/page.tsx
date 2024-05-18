
import Taskspage from '@/components/buildIn/TasksPage';
import Context from '@/utils/ContextProvider';
import React from 'react'

interface Props  {
  params:{id:number}
}

function page({params}: Props) {
  //! Переделать логику под бекенд
  //? Изменить стилизацию в globals.css
  return (
      <Taskspage projectId={params.id} isError={false}/>

  )
}

export default page