import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FiAlignRight, FiCornerUpLeft, FiHelpCircle, FiUserPlus } from "react-icons/fi";
import Form from "@/components/assembled/form";
import Menu from "@/svg/Menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
export default function Home() {
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
            <Input id="email" placeholder="" required  className="rounded-xl"  />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Пароль</Label>
            <Input id="password" required type="password"  className="rounded-xl"  />
          </div>
          <Button className="w-full" type="submit">
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