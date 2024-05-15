"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import {z} from 'zod'
import sendUserLoginData from "@/components/server/Login";
import { useRef, useState } from "react";
export default function Home() {
  const router = useRouter()
  const schema = z.object({
      login: z.string().min(6),
      password: z.string().min(6)
  })

  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error,setError] = useState({
      status:false,
      text:"",
    })
  const [errorData, setErrorData] = useState<string>('')
  const sendData = async () => {
      const data = {
          login: login || '',
          password: password || ''
      }
      const result = schema.safeParse(data)
      if (!result.success) {
          setErrorData(result.error.issues[0].message)
          console.error(result.error.message)
          alert("error")
      }
      try{
      const resultData = await sendUserLoginData(data)   
      if (!resultData) {
          setError({status:true, text:"Ошибка аутентификации пользователя"})
          throw new Error("Failed to login")
      }
      router.push("/profile")
          localStorage.setItem('userData', JSON.stringify(resultData))  
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-gradient-to-br from-[#f0f4ff] to-[#e6e9f2] px-4 py-12 dark:from-[#0f172a] dark:to-[#1e293b]">
      <div className="w-full max-w-md space-y-6  bg-basic-default rounded-xl p-6 shadow-lg dark:bg-gray-900">
        <header className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Вход</h1>
          <p className="text-gray-500 dark:text-gray-400">С возвращением, пожалуйста войдите в аккаунт</p>
        </header>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Логин</Label>
            <Input id="email" placeholder="" required  className="rounded-xl" 
                     value={login}
                     onChange={(e) => { setLogin(e.target.value) }} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Пароль</Label>
            <Input id="password" required type="password"  className="rounded-xl" 
            value={password}
                            onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <Button className="w-full" 
          type="button"
                    onClick={()=>sendData()}>
           Войти
          </Button>
        </form>
        <footer className="text-center text-sm text-gray-500 dark:text-gray-400">
         Еще не зарегистрированы?
          <Link className="font-medium underline underline-offset-2" href="/registration">
           Регистрация
          </Link>
        </footer>
      </div>
    </main>
  );
}
//для добавления компонента run pnpm dlx shadcn-ui@latest add ... component name