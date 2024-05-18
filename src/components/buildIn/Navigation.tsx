import Link from 'next/link'
import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import { DrawerTrigger, DrawerTitle, DrawerDescription, DrawerHeader, DrawerContent, Drawer } from "@/components/ui/drawer"
import { Button } from '../ui/button'
import { Menu } from '@/svg/Svg'
type Props = {
  isBoss:boolean,
  idOfDep:number,
  isImage:boolean
}

const Navigation = (props: Props) => {
  const userData=    null

  const title =""
  return (
//     <nav className=' w-full    bg-basic-default text-basic-default flex space-x-5 '>
//     <Link href='/projectView/create'   prefetch={false}>Создать проект </Link>
//     <Link href='/'  prefetch={false}>На главную</Link>
//     <Link href='/findProject'  prefetch={false}>Найти проект</Link>
//     <Link href='/findUser' prefetch={false}>Узнать информацию по сотруднику</Link>
//    {props.isBoss && <Link href={url} >Получить отчет</Link>}
//  <ThemeSwitcher/> 
// { props.isImage &&    <Aside/>}
//         </nav>
<div className="flex justify-end ">
<Drawer>
<DrawerTrigger asChild>

    <Menu className=" absolute    w-8   h-8" />
</DrawerTrigger>
<DrawerContent className="w-[300px] md:w-[400px]  bg-basic-default" >
  <DrawerHeader>
    {
      userData &&  
        <DrawerTitle className='bg-basic-default'> {title}</DrawerTitle>

    }

  </DrawerHeader>
  <div className="grid gap-4 pl-10 pb-4">
    <Link href='/projectView/create'   prefetch={false} className="flex items-center  pr-5 gap-2 text-lg font-medium">Создать проект </Link>
    <Link className="flex items-center gap-2 text-lg font-medium" href="#">
Общая информация 
    </Link>
    {props.isBoss && 
    <Link className="flex items-center gap-2 text-lg font-medium" href={`/profile/generate/${props.idOfDep}`}>
Получить отчет
    </Link>
}
    <Link className="flex items-center gap-2 text-lg font-medium" href="#">
  Настройки
    </Link>
  <div className='flex flex-row '>  <p className=' pr-8 text-lg font-medium'>Переключить тему</p>  <ThemeSwitcher/> </div>
  </div>
</DrawerContent>
</Drawer>
</div>
  )
}

export default Navigation