import React, { use } from 'react'
import { Button } from '../ui/button'
import { deleteUser } from '../server/deleteObj'
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar"
type Props = {
    departmentMembers:userData[]
}

const DpMembers = (props: Props) => {
  const isClient = typeof window !== 'undefined';
  let userData: userData | null = null;
  if (isClient) {
    userData = JSON.parse(localStorage?.getItem('userData') || '{}');
  }
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-basic-default p-4   rounded-2xl ">
   {
        props.departmentMembers.map((user:any)=>
     <div className="flex items-center space-x-4" key={user.id}>
       <Avatar>
         <AvatarImage alt="Employee Avatar" src={user.avatar} />
         <AvatarFallback>{user.first_name}</AvatarFallback>
       </Avatar>
       <div>
  
         <h3 className="text-lg font-medium">{user.first_name} {user.last_name}</h3>
         <h4>Возраст: {user.age}</h4>
         {
          user.id == userData!.id &&
          <h5> Это вы</h5>
        }
         <Button className="w-full sm:w-auto bg-button-base  rounded-xl" onClick={() => {
    const sure = confirm('Вы уверены что хотите удалить работника?');
   if (sure) {
  deleteUser(user.id);
     }}}>Удалить</Button>
          </div>
     </div> ) }
   </div>
  )
}

export default DpMembers