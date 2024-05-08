import Link from 'next/link'
import React from 'react'

type Props = {
  isBoss:boolean,
  idOfDep:number
}

const Navigation = (props: Props) => {
  const url = `/profile/generate/${props.idOfDep}`
  return (
    <nav className=' w-full   bg-basic-default text-basic-default flex space-x-5'>
    <Link href='/project/create' >Создать проект </Link>
    <Link href='/'>На главную</Link>
    <Link href='/findProject'>Найти проект</Link>
    <Link href='/findUser' prefech={false}>Узнать информацию по сотруднику</Link>
    <Link href={url} >Получить отчет</Link>
        </nav>
  )
}

export default Navigation