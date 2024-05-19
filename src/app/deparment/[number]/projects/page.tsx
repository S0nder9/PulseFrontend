import Link from 'next/link'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
<main>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Проекты нашего департамента</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Ознакомьтесь с текущими проектами, над которыми работает наш департамент.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            <article className="relative group overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">Подробнее</span>
              </Link>
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-semibold text-lg md:text-xl">Проект по модернизации системы</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Внедрение новых технологий для повышения эффективности.
                </p>
                <Link className="font-semibold underline underline-offset-4" href="#">
                  Подробнее
                </Link>
              </div>
            </article>
            <article className="relative group overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">Подробнее</span>
              </Link>
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-semibold text-lg md:text-xl">Разработка мобильного приложения</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Создание удобного и функционального мобильного приложения.
                </p>
                <Link className="font-semibold underline underline-offset-4" href="#">
                  Подробнее
                </Link>
              </div>
            </article>
            <article className="relative group overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">Подробнее</span>
              </Link>
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-semibold text-lg md:text-xl">Внедрение системы управления данными</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Оптимизация процессов работы с данными для повышения эффективности.
                </p>
                <Link className="font-semibold underline underline-offset-4" href="#">
                  Подробнее
                </Link>
              </div>
            </article>
            <article className="relative group overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">Подробнее</span>
              </Link>
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-semibold text-lg md:text-xl">Оптимизация бизнес-процессов</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Анализ и улучшение ключевых бизнес-процессов.
                </p>
                <Link className="font-semibold underline underline-offset-4" href="#">
                  Подробнее
                </Link>
              </div>
            </article>
            <article className="relative group overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">Подробнее</span>
              </Link>
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-semibold text-lg md:text-xl">Разработка веб-портала</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Создание современного и функционального веб-портала.
                </p>
                <Link className="font-semibold underline underline-offset-4" href="#">
                  Подробнее
                </Link>
              </div>
            </article>
            <article className="relative group overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">Подробнее</span>
              </Link>
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-semibold text-lg md:text-xl">Внедрение CRM-системы</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Автоматизация управления взаимоотношениями с клиентами.
                </p>
                <Link className="font-semibold underline underline-offset-4" href="#">
                  Подробнее
                </Link>
              </div>
            </article>
            <article className="relative group overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">Подробнее</span>
              </Link>
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-semibold text-lg md:text-xl">Разработка корпоративного сайта</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Создание современного и привлекательного корпоративного сайта.
                </p>
                <Link className="font-semibold underline underline-offset-4" href="#">
                  Подробнее
                </Link>
              </div>
            </article>
            <article className="relative group overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">Подробнее</span>
              </Link>
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-semibold text-lg md:text-xl">Внедрение системы бизнес-аналитики</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Повышение эффективности принятия управленческих решений.
                </p>
                <Link className="font-semibold underline underline-offset-4" href="#">
                  Подробнее
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page