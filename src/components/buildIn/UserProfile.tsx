import React from 'react'
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
type Props = {
    userData:userData
    title:string
}

const UserProfile = (props: Props) => {
  return (
  <aside className="flex flex-col    items-center p-8 space-y-6  bg-basic-default  " >
    <Avatar className='select-none'>
      <AvatarImage alt="Profile picture" src={props.userData.avatar} />
      <AvatarFallback />
    </Avatar>
    <div>
      <h1 className="text-2xl font-bold select-none">{props.userData.first_name} {props.userData.last_name} </h1>
     <h2 className='text-xl font-bold bg-basic-default'> {props.userData.job_title_id ? props.title : null}</h2>
      <p className="text-xs text-secondary-default">{props.userData.position=='B' ? "Начальник" :"Сотрудник"}</p>
      <p className="text-xs  text-secondary-default">Департамент {}</p>
    </div>
    <div className="text-xs">
      <Button variant="secondary" className='bg-button-base rounded-xl'>Редактировать</Button>
      </div>
  </aside>

  )
}

export default UserProfile