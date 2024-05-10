
import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export default function FindProject() {
  //TODO сделать поиск 
  //TODO не разрешать редачить если ты не в проекте
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-basic-default p-4">
      <div className="max-w-3xl w-full">
        <Input
          className="w-full px-4 py-3 rounded-xl shadow-md  text-basic-default focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Найти проекты"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full max-w-6xl">
        <Card>
          <Image
            alt="Project Image"
            className="rounded-t-lg object-cover w-full aspect-[4/3]"
            height={250}
            src="/placeholder.svg"
            width={400}
          />
          <CardContent className="p-4 flex flex-col justify-between">
            <div>
              <CardTitle>Project 1</CardTitle>
              <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardDescription>
            </div>
            <Link
              className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-primary-500 text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              href="#"
            >
              Подробнее
            </Link>
          </CardContent>
        </Card>
        <Card>
          <Image
            alt="Project Image"
            className="rounded-t-lg object-cover w-full aspect-[4/3]"
            height={250}
            src="/placeholder.svg"
            width={400}
          />
          <CardContent className="p-4 flex flex-col justify-between">
            <div>
              <CardTitle>Project 1</CardTitle>
              <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardDescription>
            </div>
            <Link
              className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-primary-500 text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              href="#"
            >
              Подробнее
            </Link>
          </CardContent>
        </Card>
        <Card>
          <Image
            alt="Project Image"
            className="rounded-t-lg object-cover w-full aspect-[4/3]"
            height={250}
            src="/placeholder.svg"
            width={400}
          />
          <CardContent className="p-4 flex flex-col justify-between">
            <div>
              <CardTitle>Project 1</CardTitle>
              <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardDescription>
            </div>
            <Link
              className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-primary-500 text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              href="#"
            >
              Подробнее
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
