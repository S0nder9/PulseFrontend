import Link from 'next/link'
import React from 'react'

type Props = {}

const Navigation = (props: Props) => {
  return (
    <nav className=' w-full   bg-basic-default text-basic-default flex space-x-5'>
    <Link href='/project/create' >Создать проект </Link>
    <Link href='/'>На главную</Link>
    <Link href='/findProject'>Найти проект</Link>
    <Link href='/findUser'>Узнать информацию по сотруднику</Link>
        </nav>
  )
}

export default Navigation