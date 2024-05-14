interface OutCome  {
    message:string,
    token: string,
    userData: {
      id: number,
      job_title_id: number,
      avatar: string,
      age: number,
      first_name: string,
      last_name: string,
      father_name: string,
      login:string,
      position: string,
      department_id:number
    }
  }
  interface userData {
      id: number ,
      job_title_id: number,
      avatar: string,
      age: number,
      first_name: string,
      last_name: string,
      father_name: string,
      login:string,
      position: string ,
      department_id:number
  }

  interface createUser {
    job_title_id: number,
    avatar: string,
    age: number,
    first_name: string,
    last_name: string,
    father_name: string,
    login:string,
    password:string,
    department_id:number
}
interface jobTitle {
    id:number,
    name:string
}
  interface task {
      id: number,
      project_id: number,
      name: string,
      description: string,
      hoursToAccomplish:number,
      stageAt: string,
      priority: number,
      workers: Array<number>
      created_at: string
  }
  interface addTask {
    project_id:number,
    name:string,
    description:string,
    stageAt:string,
    hoursToAccomplish:number,
    priority:number,
    workers:Array<number> 
  }
  interface problem {
    id: number,
    project_id: number,
    name: string,
    description: string,
    status:string,
author:number
    created_at: string
}
  interface addProblem {
    project_id:number,
    name:string,
    description:string,
status:string,
author:number
  }
  interface project {
      id: number,
      name:string ,
      description: string,
      members: Array<number>,
      true_members: string ,
      created_at: string
  }
  interface recProject {
    id: number,
    name:string ,
    description: string,
    members: Array<number>,
    created_at: string
}
  
  interface projectSend {
  name:string ,
    description: string,
    members: Array<number>,
  }