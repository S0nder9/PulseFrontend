import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import React from 'react'
import { DropdownMenuTrigger, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { ArrowUpDownIcon } from '@/svg/Svg'
type Props = {}

const page = (props: Props) => {
  //! Добавить доску ошибок 
  return (
    <main className="bg-basic-default rounded-lg shadow-md p-6 h-screen w-full">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Доска Ошибок</h1>
        <Button variant="default" size="sm">Создать проблему</Button>
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
                      <Button variant="ghost" size="icon" className='  bg-basic-default'>
                        <ArrowUpDownIcon />
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
              Окрыто
                </Badge>
              </td>
            </tr>
            <tr>
              <td>#3</td>
              <td className="font-medium">Fix the layout on mobile devices</td>
              <td>2023-04-15</td>
              <td>
                <Badge className="bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400" variant="outline">
                Закрыто
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
export default page