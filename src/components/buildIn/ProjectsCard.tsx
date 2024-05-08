import React from 'react'
import { Card, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { deleteProject } from '../server/deleteObj';
import Link from 'next/link';

type Props = {
    projects:project | project[] 
}

const ProjectsCard = (props: Props) => {
  return (
    <section >
    <div className="grid max-w-8xl gap-4 px-4 mx-auto lg:grid-cols-2 lg:max-w-5xl lg:gap-8 dark:lg:gap-6">
    {
        Array.isArray(props.projects) ?
                    props.projects.map((project, index) =>
                      <div key={index} className='flex-row'>
                        <Card className="grid gap-4 sm:grid-cols-3">
                          <CardContent className="col-span-2 space-y-4">
                            <article className="space-y-2">
                              <h2 className="text-xl font-bold">{project.name}</h2>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {project.description}
                              </p>
                            </article>
                            <div className="grid gap-0.5 sm:grid-cols-2">
                              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                                <div className=" flex" >
                              {project.true_members.length > 1 ? project.true_members : "nety ego"}
                              </div>

                            </div>
                            </div>
                          </CardContent>
                          <CardFooter className="flex flex-col gap-1 sm:justify-end sm:flex-row">
                            <Button className="w-fit sm:w-auto overflow-hidden">
                              <Link href='/project/[id]' as={`/project/${project.id}`}>
                            Посмотреть
                              </Link>
                            </Button>
                            <Button className="w-full sm:w-auto" onClick={() => {
const sure = confirm('Вы уверены что хотите удалить проект ?');
if (sure) {
deleteProject(project.id);
}
}}>              
Удалить
                            </Button>
                      
                          </CardFooter>
                        </Card>
                      </div>
        ) 
      
        :
        <Card className="grid gap-4 sm:grid-cols-3">
        <CardContent className="col-span-2 space-y-4">
          <article className="space-y-2">
            <h2 className="text-xl font-bold">{props.projects.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {props.projects.description}
            </p>
          </article>
          <div className="grid gap-0.5 sm:grid-cols-2">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <div className=" flex" >
            {props.projects.true_members.length > 1 ? props.projects.true_members : "nety ego"}
            </div>

          </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-1 sm:justify-end sm:flex-row">
          <Button className="w-full sm:w-auto">
            <Link href='/project/[id]' as={`/project/${props.projects.id}`}>
          Посмотреть
            </Link>
          </Button>
<Button className="w-full sm:w-auto" onClick={() => {
const sure = confirm('Вы уверены что хотите удалить проект ?');
if (sure) {
const projectId = !Array.isArray(props.projects) ? props.projects.id : null;
if (projectId !== null) {
deleteProject(projectId);
}
}
}}>

Удалить
          </Button>
    
        </CardFooter>
      </Card>
      }
     
    </div>
  </section>
  )
}

export default ProjectsCard