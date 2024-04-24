"use server "

import { host } from "./types";

interface RegisterData {
    login:string,
    email:string,
    password:string
}
async function registesrUser(data: RegisterData): Promise<string> {
    const response = await fetch(`${host}/api/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: data.login,
            password: data.password,
            email: data.email
        })
    });

    const responseData = await response.json();

    return responseData.token;
}
async function createProject(name:string,description:string,member:Array<number>) {
    const response = await fetch(`${host}/api/project/0`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            description: description,
            members: member
        })
    });
console.log(response)
    const responseData = await response.json();

    return responseData.id

    
}
async function createTask(data:addTask): Promise<any> {
 
    const response = await fetch(`${host}/api/task/0`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           project_id: data.project_id,
             name: data.name,
            description: data.description,
            hoursToAccomplish: data.hoursToAccomplish,
            stageAt:data.stageAt,
             priority: data.priority,
            workers: data.workers
        })
    });
console.log(response.status , "Статус создания таски")
    const responseData = await response.json();

    return responseData

}
export {createProject,registesrUser,createTask}


