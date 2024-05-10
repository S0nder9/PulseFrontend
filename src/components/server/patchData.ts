"use server"
import { cookies } from "next/headers";
import { host, statusType } from "./types";
const status = {
    code:0,
    text:""
}
async function changeTaskStatus(id:number,changedStatus:string):Promise<statusType> {
    const cookieStore = cookies();
    const jwt = cookieStore.get('jwt')?.value
    if (!jwt) {
        status.code = 1
    status.text = "no token given"
        return status
    }
    if (!id) {
        throw new Error('No task id provided')
    }
    console.log(id,changedStatus)
    const res = await fetch(`${host}task/${id}`,{
        method:"PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            stageAt:changedStatus
        })
    });
    if (!res.ok) {
    status.code = res.status.valueOf()
    status.text = res.statusText.valueOf()
        return status
    }
    return status
}
async function updateUserData(data:userData,id:number):Promise<userData | statusType> {
    const cookieStore = cookies();
    const jwt = cookieStore.get('jwt')?.value
    if (!jwt) {
        status.code = 1
    status.text = "no token given"
        return status
    }
    if (!id) {
        throw new Error('No task id provided')
    }
    const res = await fetch(`${host}user/${id}`,{
        method:"PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            job_title_id: data.job_title_id ,
            age: data.age,
            first_name: data.first_name,
            last_name: data.last_name,
            father_name: data.father_name,
           department_id:data.department_id
        })
    });
    if (!res.ok) {
    status.code = res.status.valueOf()
    status.text = res.statusText.valueOf()
        return status
    }
    return status
}
export {changeTaskStatus,updateUserData}

