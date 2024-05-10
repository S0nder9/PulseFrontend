'use client'
import { Input } from "@/components/ui/input"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export default function newComs() {
  //tODO сделать поиск user 
  return (
    <section className="w-full py-12 md:py-24 lg:py-32  bg-basic-default">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="w-full max-w-xl">
            <Input placeholder="Найти рабочего..."  className="text-basic-default" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-950">
                <Avatar>
                  <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold">Olivia Davis</h3>
                  <p className="text-gray-500 dark:text-gray-400">Product Manager</p>
                  <p className="text-sm line-clamp-2 mt-2">
                    Experienced product manager with a passion for building innovative solutions. Skilled in user
                    research, product strategy, and cross-functional collaboration.
                  </p>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  )
}