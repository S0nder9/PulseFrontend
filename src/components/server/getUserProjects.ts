'use server'
import { cookies } from "next/headers";
import { host } from "./types";

async function getUserProjects(id: number): Promise<Array<project> | project>  {
    const cookieStore = cookies();
    const jwt = cookieStore.get('jwt')?.value
    console.log(jwt);
    if (!jwt) {
        throw new Error('No token provided')
    }
    console.log(host, id)
    if (!id) {
        throw new Error('No project id provided')
    }
    const res = await fetch(`${host}/api/all_user_projects/${id}`);
    if (!res.ok) {
        console.log(res.status)
        throw new Error('Failed to fetch data')
    }
    const receiveddata = await res.json();
    return receiveddata
}

async function getUserTask(id:number):Promise<Array<task> | task> {
    const cookieStore = cookies();
    const jwt = cookieStore.get('jwt')?.value
    console.log(jwt);
    if(!jwt){
        throw new Error('No token provided')
    }
    console.log(host,id)
    if(!id ){
        throw new Error('No task id provided')
    }
    const res = await fetch(`${host}/api/all_user_task/${id}`);
    if(!res.ok) {
        console.log(res.status)
        throw new Error('Failed to fetch data')
    }
    const receiveddata = await res.json();
    return receiveddata
}
async function getAllProjectTasks(id:number):Promise<Array<task> | task> {
    const cookieStore = cookies();
    const jwt = cookieStore.get('jwt')?.value
    console.log(jwt);
    if(!jwt){
        throw new Error('No token provided')
    }
    console.log(host,id)
    if(!id ){
        throw new Error('No project id provided')
    }
    const res = await fetch(`${host}/api/task_for_project/${id}`);
    if(!res.ok) {
        console.log(res.status)
        throw new Error('Failed to fetch data')
    }
    const receiveddata = await res.json();
    return receiveddata
}
export  { getUserProjects,getUserTask,getAllProjectTasks};