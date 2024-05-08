import React from 'react'
import { Button } from '../ui/button'
import { deleteUser } from '../server/deleteObj'

type Props = {
    departmentMembers:userData[]
}

const DpMembers = (props: Props) => {
  return (
   <section className='basis-1/3  flex-col-reverse '>
    {
        props.departmentMembers.map((user:any)=>
              <div className='  ' key={user.id}>
                {/* <div>
                  <img src={user.avatar} className='h-16 w-16 rounded-full'/>
                </div> */}
                <div className='p-4 w-96'>  
                  <h1>{user.first_name} {user.father_name} {user.last_name}  </h1>
                  <h1>Должность: {user.position}</h1>
                  <h1>Проекты: {user.job_title_id}</h1>
                </div>

              <div>
              <Button className="w-full sm:w-auto" onClick={() => {
    const sure = confirm('Вы уверены что хотите удалить работника?');
    if (sure) {
    deleteUser(user.id);
    }}}>Удалить</Button>
              </div>
              </div>
        )
    }
   </section>
  )
}

export default DpMembers