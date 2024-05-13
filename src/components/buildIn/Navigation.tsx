import Link from 'next/link'
import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import { useTheme } from 'next-themes'
import Aside from '../assembled/Aside'
import { Switch } from '../ui/switch'

type Props = {
  isBoss:boolean,
  idOfDep:number,
  isImage:boolean
}

const Navigation = (props: Props) => {
  const url = `/profile/generate/${props.idOfDep}`
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <nav className=' w-full    bg-basic-default text-basic-default flex space-x-5 '>
    <Link href='/project/create'   prefetch={false}>Создать проект </Link>
    <Link href='/'  prefetch={false}>На главную</Link>
    <Link href='/findProject'  prefetch={false}>Найти проект</Link>
    <Link href='/findUser' prefetch={false}>Узнать информацию по сотруднику</Link>
   {props.isBoss && <Link href={url} >Получить отчет</Link>}
 <ThemeSwitcher/> 
{ props.isImage &&     <Aside/>}
        </nav>
  )
}

export default Navigation