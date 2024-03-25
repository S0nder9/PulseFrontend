import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FiAlignRight, FiCornerUpLeft, FiHelpCircle, FiUserPlus } from "react-icons/fi";
import Form from "@/components/assembled/form";
import Menu from "@/staff/Menu";
export default function Home() {
  return (
  <>
  <div className=" float-right">
    <DropdownMenu>
  <DropdownMenuTrigger className=""><Menu/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Страницы</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>      Главная</DropdownMenuItem>
    <DropdownMenuItem>Регистация </DropdownMenuItem>
    <DropdownMenuItem>Часто задаваемые вопросы      <span><FiHelpCircle /></span></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
    </div>
    <main className="flex flex-col  p-24 ">
      <div className="flex-row justify-center">
      <h1  className=" text-center">Вход</h1>
      </div>
  <Form/>
    </main>
    </>
  );
}
//для добавления компонента run pnpm dlx shadcn-ui@latest add ... component name