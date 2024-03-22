"use server"
import { cookies } from 'next/headers';
 interface LoginData {
    login: string
    password: string
}
   async function sendUserLoginData(data: LoginData): Promise<void | string> {
const res  =  await fetch('http://127.0.0.1:8000/api/users/login', {
method: 'POST',
credentials:'include',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
            console.log(res.headers.getSetCookie());
            return "Success"
}
export default sendUserLoginData;