'use client'
import { Button } from "@/components/ui/button"
import { ResponsiveBar } from "@nivo/bar"
import { DialogTrigger, DialogContent, Dialog } from "@/components/ui/dialog"
import { UserIcon, XIcon } from "@/svg/Svg"

export default function d() {
  return (
    <main className="flex flex-col items-center justify-center  bg-gray-100 dark:bg-gray-900">
      <div className=" bg-basic-default shadow-lg rounded-lg w-full max-w-4xl">
        <header className="flex items-center justify-between p-8">
          <h1 className="text-2xl font-bold  text-basic-default">Sales Report</h1>
          <div className="flex items-center space-x-2">
            <UserIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-600 dark:text-gray-400">Ivan Ivanov</span>
          </div>
        </header>
        <div className="flex items-center justify-between p-8">
          <div className="text-gray-600 dark:text-gray-400">Marketing Department</div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="outline">
              Download
            </Button>
          </div>
        </div>
        <div className="h-[600px] overflow-y-auto">
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full rounded-none rounded-b-lg" size="sm" variant="outline">
              Preview
            </Button>
          </DialogTrigger>
          <DialogContent className="w-screen h-screen max-w-none p-0">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-4">
                <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">Preview</h2>
                <div>
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <XIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  </Button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto">
              </div>
              </div>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  )
}
