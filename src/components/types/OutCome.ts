interface OutCome  {
    message:string,
    token: string,
    userData: {
      id: number,
      job_title_id: number,
      age: number,
      first_name: string,
      last_name: string,
      father_name: string,
      login:string,
      position: string
    }
  }
  interface userData {

      id: number,
      job_title_id: number,
      age: number,
      first_name: string,
      last_name: string,
      father_name: string,
      login:string,
      position: string
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
      created_at: string
  }