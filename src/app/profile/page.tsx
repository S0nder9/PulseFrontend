'use client'
import authUser from '@/components/server/Auth';
import fetchTitle from '@/components/server/FetchJobTitle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import React, { use, useCallback, useEffect, useState } from 'react'
import CreateProjectsPage from '../cr-project/page';
import { useStore } from '@/components/types/state';
import { cookies } from 'next/headers';
import { useRouter } from 'next/navigation';
import { checkCookie } from '@/components/server/CheckCookie';


const Profile = () => {
    const [userData, setUserData] = useState<userData | null>(null);
    const [error,setError] = useState(false)
const router  = useRouter()

    useEffect(() => {
      const fetchData = async () => {
        const isToken =  await checkCookie()
        if(!isToken){
  router.push('/login')
  return
        }
        try {
          const response = await authUser();
          console.log(response);
          setUserData(response.userData);
         
        }
         catch (error) {
        setError(true)
        throw new Error('error happened while authenticating user')
        }
      };
      fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if(userData){
      localStorage.setItem('userData', JSON.stringify(userData))
    }
  return (
<section>
        <div>{userData ?  
        <>
        <Avatar className="Avatar">
            <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        <p>{userData.first_name }  {userData. last_name } </p>
</>
         :
        <h1>
            {error? 'error happened' : 'loading'}
            </h1>}</div>
</section>
  )
}

export default Profile