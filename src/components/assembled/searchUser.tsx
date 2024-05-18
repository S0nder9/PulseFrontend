'use client'
import React, { use, useEffect, useState } from 'react'
import { getUserByPrefixSurname, getUserName } from '../server/getUserProjects';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { beautifyArray } from '../server/other/fromIdsToNames';

type Props = {
    memberIds:number[]
}
interface user {
    id: number;
    name:string
}
function SearchUser(props:Props) {
const userId: userData = JSON.parse(localStorage?.getItem('userData') || '{}');
const [membersList, setMembersList] = useState<Array<any>>([{
id: userId.id,
name: userId.first_name + ' ' + userId.last_name 
}])
const [name, setName] = useState('')
const [users, setusers] = useState<Array<userData> | userData>([])
useEffect(() => {
const getNames = async () => {
const users = await getUserByPrefixSurname(name)
setusers(users)
console.log(users)
}
if (name.length < 1) {
return
}
setTimeout(() => {
getNames()
}, 2000)

}, [name])
//добавить дебоунсинг
const handleSelectUser = (user: userData) => {
    setName("")
        if (membersList.some(member => member.id === user.id)) {
            return;
        }

setMembersList((prevIds) => [...prevIds, {
id: user.id,
name: user.first_name + ' ' + user.last_name
}])

props.memberIds.push(user.id)

}

return (
<div className="space-y-2  bg-basic-default mt-5">
<div className="flex space-x-4">
Добавлены :  {membersList.map(user =>
    <div className='flex flex-col ' key={user.id}>
<p >{user.name} </p>
</div>
)}  
</div>
<Input id='participants' className=" rounded-xl" placeholder="Введите Фамилию" value={name} onChange={(e) => setName(e.target.value)} />
<div className=' pt-0 mt-0 text-basic-default'>
{Array.isArray(users) ?
users.map((user) => (
<div key={user.id} onClick={() => handleSelectUser(user)}  >
{user.first_name} {user.last_name} 
</div>
))
:
<div key={users.id}  >
{users.first_name} {users.last_name} <Button onClick={() => {handleSelectUser(users)
    setusers([])
}}>Добавить</Button>
</div>
}
</div>
</div>
)
}

export default SearchUser