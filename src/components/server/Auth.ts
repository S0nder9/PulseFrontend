"use server"
import { cookies } from 'next/headers';
import { host } from './types';
async function authUser(): Promise<OutCome > {
    const cookieStore = cookies();
    const jwt = cookieStore.get('jwt')?.value
    if(!jwt){
        throw new Error('No token provided')
    }
    const res = await fetch(`${host}users/auth`,{
        credentials:'include',
        headers:{
            Cookie: `jwt=${jwt}`
        }
    });
        return res.json()
}
export default authUser;