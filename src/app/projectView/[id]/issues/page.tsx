import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <main className="w-full  h-screen  bg-basic-default mx-auto px-4 py-8 md:px-6 md:py-12">
    <header className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold bg-basic-default ">Проблемы</h2>
      <div className="text-sm text-gray-500 dark:text-gray-400">May 11, 2024</div>
    </header>
    <section className="mb-8">
      <div className="relative">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gray-300 dark:bg-gray-700" />
        <div className="flex justify-between pt-10 text-sm text-gray-500 dark:text-gray-400">
          <span>1</span>
          <span>5</span>
          <span>10</span>
          <span>15</span>
          <span>20</span>
          <span>25</span>
          <span>30</span>
        </div>
      </div>
    </section>
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <article className="relative">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-50" />
        <Card>
          <CardContent className="flex items-center gap-2">
            <DoorOpenIcon className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-medium">Implement new feature</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Created on May 1, 2023</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button size="sm" variant="ghost">
            Подробнее
            </Button>
    
          </CardFooter>
        </Card>
      </article>
      <article className="relative">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-50" />
        <Card>
          <CardContent className="flex items-center gap-2">
            <DoorOpenIcon className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-medium">Fix bug in login flow</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Created on May 5, 2023</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
          <Button size="sm" variant="ghost">
            Подробнее
            </Button>
    
          </CardFooter>
        </Card>
      </article>
      <article className="relative">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-50" />
        <Card>
          <CardContent className="flex items-center gap-2">
            <DoorOpenIcon className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-medium">Improve performance</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Created on May 10, 2023</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
          <Button size="sm" variant="ghost">
            Подробнее
            </Button>
    
          </CardFooter>
        </Card>
      </article>
      <article className="relative">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-50" />
        <Card>
          <CardContent className="flex items-center gap-2">
            <DoorOpenIcon className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-medium">Update documentation</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Created on May 15, 2023</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
          <Button size="sm" variant="ghost">
            Подробнее
            </Button>
    
          </CardFooter>
        </Card>
      </article>
      <article className="relative">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-50" />
        <Card>
          <CardContent className="flex items-center gap-2">
            <DoorOpenIcon className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-medium">Refactor codebase</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Created on May 20, 2023</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
          <Button size="sm" variant="ghost">
            Подробнее
            </Button>
    
          </CardFooter>
        </Card>
      </article>
      <article className="relative">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-50" />
        <Card>
          <CardContent className="flex items-center gap-2">
            <DoorOpenIcon className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-medium">Improve accessibility</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Created on May 25, 2023</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
          <Button size="sm" variant="ghost">
            Подробнее
            </Button>
    
          </CardFooter>
        </Card>
      </article>
      <article className="relative">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-50" />
        <Card>
          <CardContent className="flex items-center gap-2">
            <DoorOpenIcon className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-medium">Optimize database queries</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Created on May 30, 2023</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
          <Button size="sm" variant="ghost">
            Подробнее
            </Button>
    
          </CardFooter>
        </Card>
      </article>
    </section>
  </main>
  )
}
function DoorOpenIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 4h3a2 2 0 0 1 2 2v14" />
        <path d="M2 20h3" />
        <path d="M13 20h9" />
        <path d="M10 12v.01" />
        <path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z" />
      </svg>
    )
  }
export default page