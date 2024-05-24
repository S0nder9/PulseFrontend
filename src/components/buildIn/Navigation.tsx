import Link from 'next/link'
import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import { DrawerTrigger, DrawerTitle, DrawerDescription, DrawerHeader, DrawerContent, Drawer } from "@/components/ui/drawer"
import { FiAlignJustify } from "react-icons/fi";
type Props = {
}

const Navigation = (props: Props) => {
  const isClient = typeof window !== 'undefined';
  let userData: userData | null = null;
  if (isClient) {
    userData = JSON.parse(localStorage?.getItem('userData') || '{}');
  }

  return (
    <div className="flex justify-end  bg-basic-default  over ">
      <Drawer>
        <DrawerTrigger asChild>
          <h1 className=' text-basic-default cursor-pointer select-none '>
<FiAlignJustify className=' scale-150'/>
          </h1>
        </DrawerTrigger>
        <DrawerContent className="w-[300px] md:w-[400px]  bg-basic-default">
          <DrawerHeader>
            {userData && (
              <DrawerTitle className='bg-basic-default'>
                Куда вам {userData.first_name}?
              </DrawerTitle>
            )}
          </DrawerHeader>
          <div className="grid gap-4 pl-10 pb-4">
            <Link
              href='/projectView/create'
              prefetch={false}
              className="flex items-center  pr-5 gap-2 text-lg font-medium"
            >
              Создать проект
            </Link>
            <Link
              className="flex items-center gap-2 text-lg font-medium"
              href="/profile"
            >
             Профиль
            </Link>
            {userData?.position === "B" && (
              <Link
                className="flex items-center gap-2 text-lg font-medium"
                href={`/deparment/${userData.department_id}/download`}
              >
                Получить отчет
              </Link>
            )}
            <Link
              className="flex items-center gap-2 text-lg font-medium"
              href="#"
            >
              Настройки
            </Link>
            <div className='flex flex-row'>
              <p className=' pr-8 text-lg font-medium'>Переключить тему</p>
              <ThemeSwitcher />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Navigation