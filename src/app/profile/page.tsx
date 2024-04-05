'use client'
import authUser from '@/components/server/Auth';
import fetchTitle from '@/components/server/FetchJobTitle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import React, { use, useCallback, useEffect, useState } from 'react'
import CreateProjectsPage from '../cr-project/page';
import { useStore } from '@/components/types/state';

type Props = {}

const Profile = (props: Props) => {
    const [userData, setUserData] = useState<any>({
        id: 0,
        job_title_id: 0,
        title:'',
        age: 0,
        first_name: '',
        last_name: '',
        father_name: '',
        position: '',
        login: ''
    });
    const [title,setTitle] = useState<any>('')
    const [error,setError] = useState(false)

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await authUser();
          console.log(response);
          setUserData(response.userData);
         
          

          // eslint-disable-next-line react-hooks/rules-of-hooks
          /*
          19:36:02.761 | next.js browser	    
    {
      message: 'Ты аутетифицирован',
      token: 
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjozLCJleHAiOjE3MTI5MzU5NjYsImlhdCI6MTcxMjA3MTk2Nn0.WPymFBcXtWWb4LsdtKtalu0Cf6v4FemurDGX6YrE-2g',
      userData: {
        id: 3,
        job_title_id: 6,
        age: 35,
        first_name: 'Степанов',
        last_name: 'Олег',
        father_name: 'Дмитреевич',
        position: 'работник',
        login: 'dmitry321'
      }
    }
          */
        }
         catch (error) {
        setError(true)
        throw new Error('error happened')
        }
      };
      fetchData()
      if(error && userData.job_title_id == 0){
    return
      }
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