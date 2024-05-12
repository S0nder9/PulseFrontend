"use client"
import SearchIcon from "@/svg/SearchIcon";
import Link from "next/link";
import Image from "next/image";
import {motion} from 'framer-motion'
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { checkCookie } from "@/components/server/CheckCookie";
import { Button } from "@/components/ui/button";
export default function Home() {
  const router  = useRouter()
  // TODO доделать страницу поика
  useEffect(()=>{
    const check = async() =>{
      const isToken =  await checkCookie()
      if(isToken){
  router.push('/profile')
  return
      }
    }
    check()
  },[])
  //const { scrollY Progress } = useScroll();
const { resolvedTheme, setTheme } = useTheme();
console.log(resolvedTheme);
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48  bg-basic-default">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none  text-basic-default">
              Управляй бизнес процессами вместе с нами
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Управляй своими проектами, следи за ошибками , управляй сотрудниками  и работай  вместе  с командой в одном месте.
               <span className=" text-xl"> Rapid Rabit -это ультимативный инструмент для управления бизнес-процессами.</span>
              </p>
            </div>
            <div className="flex w-full max-w-sm flex-col space-y-2">
              <Button
                className="w-full bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                type="submit"
              >
              <Link href={"/registration"} prefetch={false}> Начать</Link>
              </Button>
              <p className="text-xs text-gray-500 dark:text-gray-400">
               Зарегистрируйся для получения дальнейшей информации  
              </p>
            </div>
          </div>
          <img
            alt="Hero"
            
            className=" select-none mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="/main.png"
            width="550"
          />
        </div>
      </div>
    </section>
  );
}
//для добавления компонента run pnpm dlx shadcn-ui@latest add ... component name