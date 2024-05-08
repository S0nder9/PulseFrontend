import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '../ui/badge';

type Props = {
    userData:userData
    title:string
}

const UserProfile = (props: Props) => {
  return (
<article className="flex  items-start space-x-4  basis-1/3
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
</article>
  )
}

export default UserProfile