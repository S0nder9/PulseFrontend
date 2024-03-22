"use server"
import { cookies} from 'next/headers';
 interface LoginData {
    login: string
    password: string
}
interface OutPut{
message: string,
token: string
}
   async function sendUserLoginData(data: LoginData): Promise<OutPut> {
    const res = await fetch('https://kdnhfs81-8000.euw.devtunnels.ms/api/users/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const receiveddata: OutPut = await res.json();

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    const cookiesApi = cookies()
    cookiesApi.set('jwt', receiveddata.token,{
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        httpOnly: true,
        secure: true,
    })
    console.log(receiveddata)
    return receiveddata;
}

export default sendUserLoginData;