import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut} from "@/components/ui/command"
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import Link from "next/link"
import { Input } from "@/components/ui/input"


export default function Home() {
  return (
      <div className="all">
        <div className="block1">
          <h1 className="text">Трудозатраты</h1>
          <ul>
            <Link href={"../../../my-stat/"}><li>Моя статистика</li></Link>
            <Link href={"../../../labor-costs/"}><li className="li_main">Учет трудозатрат</li></Link>
          </ul>
        </div>

      <div className="col2">
        <div className="block2">


        <Popover>
  <PopoverTrigger className="input"></PopoverTrigger>
  <PopoverContent className="input"><Command>
  <CommandInput/>
  <CommandList>
  <CommandEmpty>Ничего не найдено</CommandEmpty>
    <CommandGroup heading="Я...">
    <Button className="CommandItem" asChild><Link href={"../../../my-stat/"}><CommandItem>Сотрудник</CommandItem></Link></Button>
    <Button className="CommandItem" asChild><Link href={"../../../project/"}><CommandItem>Руководитель</CommandItem></Link></Button>
    <Button className="CommandItem" asChild><Link href={"../../../.../"}><CommandItem>Администратор</CommandItem></Link></Button>
    </CommandGroup>
    <CommandGroup heading="Страницы">
    <Button className="CommandItem" asChild><Link href={"../../../my-stat/"}><CommandItem>Моя статистика</CommandItem></Link></Button>
    <Button className="CommandItem" asChild><Link href={"../../../labor-costs/"}><CommandItem>Учет трудозатрат</CommandItem></Link></Button>
    </CommandGroup>
    <CommandSeparator />
  </CommandList>
</Command>
</PopoverContent>
</Popover>




        <div className="profil_block">
        <Avatar className="Avatar">
          <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" />
          <AvatarFallback>II</AvatarFallback>
        </Avatar>
        <div>
        <h2 className="h2">Ишматов Тимофей Ильич</h2>
        <h2 className="h2">Программист</h2>
        </div></div></div>



        <div className="block3">
        <Card className="CardContent">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col">
              <Label className="label">Проект</Label>
              <Select>
                <SelectTrigger className="SelectTrigger" id="framework">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="SelectContent" position="popper">
                  <SelectItem value="зеленая-зона">Зеленая зона</SelectItem>
                  <SelectItem value="SuperBrand">Продвижение бренда "SuperBrand"</SelectItem>
                  <SelectItem value="Еда онлайн">Еда онлайн</SelectItem>
                  <SelectItem value="Компания X">Логотип для компании X</SelectItem>
                </SelectContent>
              </Select>

              <Label className="label">Задача</Label>
              <Select>
                <SelectTrigger className="SelectTrigger" id="framework">
                  <SelectValue />
                </SelectTrigger >
                <SelectContent className="SelectContent" position="popper">
                  <SelectItem value="посадить баобаб"> посадить баобаб</SelectItem>
                  <SelectItem value="продвижения бренда">Разработать стратегию продвижения бренда</SelectItem>
                  <SelectItem value="заказ еды">Создание мобильного приложения для заказа еды</SelectItem>
                  <SelectItem value="логотип для компании">Создание логотипа для компании</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex flex-row items-center space-x-3"><Label className="label">Фактическое время: </Label>
              <Input className="w-[170px] h-[50px] bg-#f6faf9" type="number" /></div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="h-[50px]"><h2>Выполнил задачу</h2></Button>
      </CardFooter>
    </Card>
        </div>
        
        </div></div>
  );}
