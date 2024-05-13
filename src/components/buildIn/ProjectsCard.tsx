import React from 'react'
import { Button } from '../ui/button';
import { deleteProject } from '../server/deleteObj';
import Link from 'next/link';
import { CardTitle, CardDescription, CardHeader,CardFooter, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProjectData from '../assembled/ProjectData';
type Props = {
    projects:project | project[] 
}

const ProjectsCard = (props: Props) => {
  return (
    <section className=" bg-basic-default  p-4 rounded-2xl">
    <h2 className="text-lg font-bold  bg-basic-default ">Проекты</h2>
    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {
        Array.isArray(props.projects) ?
                    props.projects.map((project, index) =>
                      <Card className=" bg-cards-base" key={index}>
                    <CardHeader>
                      <CardTitle>{project.name}</CardTitle>
                      <CardDescription>
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge>{project.created_at}</Badge>
                      <ProjectData projectId={project.id} projectName='' withMenu={false}></ProjectData>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-1 sm:justify-end sm:flex-row">
                    <Button className="w-fit sm:w-auto overflow-hidden">
                              <Link href='/project/[id]' as={`/projectView/${project.id}`}>
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
    

)
        :
        <Card className="bg-cards-base" >
        <CardHeader>
          <CardTitle>{props.projects.name}</CardTitle>
          <CardDescription>
            <Badge variant="secondary">{props.projects.description}</Badge>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Badge>TypeScript</Badge>
          <Badge variant="secondary">1</Badge>
          <Button className="w-full sm:w-auto" onClick={() => {
const sure = confirm('Вы уверены что хотите удалить проект ?');
if (sure) {
deleteProject(0);
}
}}>              
Удалить
                </Button>
        </CardContent>
        <CardFooter className="flex flex-col gap-1 sm:justify-end sm:flex-row">
                <Button className="w-fit sm:w-auto overflow-hidden">
                  <Link href='/project/[id]' as={`/project/${props.projects.id}`}>
                Посмотреть
                  </Link>
                </Button>

          
              </CardFooter>
      </Card>    
      }
     
    </div>
  </section>

  )
}

export default ProjectsCard