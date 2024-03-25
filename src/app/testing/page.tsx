"use client"
import registerUser from '@/components/server/Register';
import React, { useState } from 'react'
type Props = {}

const page = (props: Props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState<File | null>(null);
    const [result, setresult] = useState<any>(null);
const send  =  async ()=>{
    if (!username) {
        return "Username is required"
    }
    if (!email) {
        return "Email is required"
    }
    if (!password) {
        return "Password is required"
    }
   const res  =  await registerUser(username, email, password,avatar)
   console.log(res)
   setresult(res)
   return res
}

    return (
        <>
        <div className='flex flex-col'>
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} className=' bg-gray-600  w-auto  justify-center' />
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="file" name="avatar" onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                    setAvatar(file);
                }
            }} />
            <button onClick={() => send()}>Register</button>
            {
                result ? <div>{result?.token}</div> : null
            }
            </div>

        </>
    )
}




export default page