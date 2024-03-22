"use server"
import { cookies } from 'next/headers';
async function authUser(): Promise<OutCome | string> {
    const cookieStore = cookies();
    const jwt = cookieStore.has('jwt') 
    const res = await fetch('http://127.0.0.1:8000/api/users/auth',{
        credentials:'include'
    });
if(!res.ok){
throw new Error('Authentication failed ')
}

        /* headers: {
          'Cookie': 'jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjozNiwiZXhwIjoxNzExNzMwMDU2LCJpYXQiOjE3MTA4NjYwNTZ9.-7wepW1XWmXZTW1hmc7J7awbGR6bYDy1odoQGcB8YnY'
        }*/
        console.log(res.json())
        return res.json()
}
export default authUser;