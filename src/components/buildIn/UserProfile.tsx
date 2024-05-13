import React from 'react'
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'
type Props = {
    userData:userData
    title:string
}

const UserProfile = (props: Props) => {
    {/* <article className="flex  items-start space-x-4   basis-1/4
">
<Avatar className="w-12 h-12">
<AvatarImage src={props.userData.avatar} />
<AvatarFallback>AVATAR</AvatarFallback>
</Avatar>
<div className="space-y-1.5">
    <div className="flex items-start  space-x-2">
    <h1 className="text-2xl font-bold">{props.userData.first_name} {props.userData.last_name}</h1>
    <Badge className="text-sm">{props.userData.job_title_id ? props.title : null}</Badge>
    </div>
    <dl className="grid gap-1 sm:grid-cols-2">
    <div className="flex items-center space-x-2">
        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Имя</dt>
        <dd className="font-medium">{props.userData.first_name}</dd>
    </div>
    <div className="flex items-center space-x-2">
        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Фамилия</dt>
        <dd className="font-medium">{props.userData.last_name}</dd>
    </div>
    <div className="flex items-center space-x-2">
        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Возраст</dt>
        <dd className="font-medium">{props.userData.age}</dd>
        <dd className="font-medium">{props.userData.position=='B' && "Начальник"}</dd>  
    </div>
    </dl>
</div>
</article> */}
  return (
  <aside className="flex flex-col rounded-2xl items-center p-8 space-y-6  bg-basic-default w-80 mt-2" >
    <Avatar className='select-none'>
      <AvatarImage alt="Profile picture" src={props.userData.avatar} />
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