"use client"
import SearchIcon from "@/svg/SearchIcon";
import Link from "next/link";
import Image from "next/image";
import {motion} from 'framer-motion'
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { checkCookie } from "@/components/server/CheckCookie";
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
<div className=" bg-basic-default text-basic-default">
      <header className="  text-white py-4 px-6 flex  items-center rounded-md sticky">
        <nav className="flex space-x-4 text-2xl">
          <Link className="hover:underline" href="/login" >
  Логин
          </Link>
          <Link className="hover:underline" href="/registration">
  Регистрация
          </Link>
          <Link className="hover:underline" href="S">
<Image

src='/logo.png'
alt="logo"
width="0"
height="0"
sizes="100vw"
className=" w-2/4   h-full justify-end"
/>
          </Link>
          <button
        role='button'
     
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        className=' w-auto h-auto  bg-basic-default text-basic-default  px-4 py-2 rounded-lg focus:ring'
      >
        { resolvedTheme === 'light' ? 'Переключить на темную тему' : 'Переключить на светлую тему'}
      </button>
        </nav>

      </header>
      <main className="flex flex-col h-screen bg-basic-default text-basic-default ">
<h1 className="text-center items-center mt-1.5 text-4xl sm:text-3xl lg:text-4xl   text-basic-default">Приложение для удобного менеджинга труда</h1>

      </main>
    </div>
  );
}
//для добавления компонента run pnpm dlx shadcn-ui@latest add ... component name