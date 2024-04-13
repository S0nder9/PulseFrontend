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
      position: string
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
      position: string 
  }
  interface createUser {
    job_title_id: number,
    avatar: string,
    age: number,
    first_name: string,
    last_name: string,
    father_name: string,
    login:string,
    password:string
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
  }
  interface project {
      id: number,
      name:string ,
      description: string,
      members: Array<number>,
      true_members: Array<string> ,
      created_at: string
  }