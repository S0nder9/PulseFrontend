'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {z} from 'zod'
import sendUserLoginData from '../server/Login'
import { useRouter } from 'next/navigation'
type Props = {}

function Form({}: Props) {
    const router  = useRouter()
const schema = z.object({
    login:z.string().min(6),
    password:z.string().min(6)
})
const [login, setlogin] = useState<string >()
const [password, setpassword] = useState<string >()
const sendData = ()=>{
    const data = {
        login: login || '',
        password: password || '',
    }
    const valid = schema.safeParse(data)
    if(valid.success){
        sendUserLoginData(data)
        router.push('/workspace')
    }
}
  return (
    <div className='flex flex-col '>
    <Input className=" mt-4" placeholder="Введите свой логин" 
     value={login}  onChange={(e)=>{setlogin(e.target.value)}}
    />
    <Input className="mt-4" placeholder="Введите свой пароль"
    value={password}  onChange={(e)=>{setpassword(e.target.value)}}
    />
    <Button className=" bg-orange-600 mt-4" title="" onClick={sendData}>Войти</Button> 
  </div>
  )
}

export default Form