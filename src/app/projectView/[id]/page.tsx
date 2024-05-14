import Taskspage from '@/components/component/taskspage'
import Context from '@/utils/ContextProvider';
import React from 'react'

interface Props  {
  params:{id:number}
}

function page({params}: Props) {
  //! Переделать логику под бекенд
  //? Изменить стилизацию в globals.css
  const contextValue = {
    project_id: params.id,
  };
  return (
      <Taskspage projectId={params.id} isError={false}/>

  )
}

export default page