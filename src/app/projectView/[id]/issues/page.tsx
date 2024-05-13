import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import React from 'react'
import { DropdownMenuTrigger, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
type Props = {}

const page = (props: Props) => {
  //! Добавить доску ошибок 
  return (
    <main className="bg-basic-default rounded-lg shadow-md p-6 h-screen w-full">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Доска Ошибок</h1>
        <Button size="sm">Создать проблему</Button>
      </header>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">ID</th>
              <th className="text-left">Title</th>
              <th className="text-left">
                <div className="flex items-center gap-2">
                  <span>Created</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost" className='  bg-basic-default'>
                        <ArrowUpDownIcon  />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuRadioGroup value="newest">
                        <DropdownMenuRadioItem value="newest">Newest First</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="oldest">Oldest First</DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </th>
              <th className="text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1</td>
              <td className="font-medium">Add pagination to the issues table</td>
              <td>2023-05-01</td>
              <td>
                <Badge
                  className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                  variant="outline"
                >
                  Open
                </Badge>
              </td>
            </tr>
            <tr>
              <td>#2</td>
              <td className="font-medium">Implement search functionality</td>
              <td>2023-04-25</td>
              <td>
                <Badge
                  className="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400"
                  variant="outline"
                >
                  In Progress
                </Badge>
              </td>
            </tr>
            <tr>
              <td>#3</td>
              <td className="font-medium">Fix the layout on mobile devices</td>
              <td>2023-04-15</td>
              <td>
                <Badge className="bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400" variant="outline">
                  Closed
                </Badge>
              </td>
            </tr>
            <tr>
              <td>#4</td>
              <td className="font-medium">Improve the error handling</td>
              <td>2023-03-30</td>
              <td>
                <Badge
                  className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                  variant="outline"
                >
                  Open
                </Badge>
              </td>
            </tr>
            <tr>
              <td>#5</td>
              <td className="font-medium">Add support for dark mode</td>
              <td>2023-03-20</td>
              <td>
                <Badge
                  className="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400"
                  variant="outline"
                >
                  In Progress
                </Badge>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
  function ArrowUpDownIcon(props:any) {
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
        <path d="m21 16-4 4-4-4" />
        <path d="M17 20V4" />
        <path d="m3 8 4-4 4 4" />
        <path d="M7 4v16" />
      </svg>
    )
  }
export default page