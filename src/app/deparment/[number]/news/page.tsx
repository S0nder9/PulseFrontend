import Link from "next/link";
import React from "react";
import Image from "next/image";
type Props = {};

function page({}: Props) {
    return (
        <main className="w-full max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Новости департамента
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Ознакомьтесь с последними новостями и событиями нашего
                        департамента.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md dark:bg-gray-950">
                        <Link className="absolute inset-0 z-10" href="#">
                            <span className="sr-only">View article</span>
                        </Link>
                        <Image
                            alt="News image"
                            className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                            height={225}
                            src="/placeholder.svg"
                            width={400}
                        />
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    22 мая 2023
                                </span>
                            </div>
                            <h3 className="mt-2 text-lg font-semibold leading-tight">
                                Новый проект по модернизации инфраструктуры
                            </h3>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Департамент начинает работу над масштабным
                                проектом по модернизации инфраструктуры.
                                Подробности в статье.
                            </p>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md dark:bg-gray-950">
                        <Link className="absolute inset-0 z-10" href="#">
                            <span className="sr-only">View article</span>
                        </Link>
                        <Image
                            alt="News image"
                            className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                            height={225}
                            src="/placeholder.svg"
                            width={400}
                        />
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    18 мая 2023
                                </span>
                            </div>
                            <h3 className="mt-2 text-lg font-semibold leading-tight">
                                Запуск новой системы документооборота
                            </h3>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Департамент внедряет новую систему электронного
                                документооборота для повышения эффективности
                                работы.
                            </p>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md dark:bg-gray-950">
                        <Link className="absolute inset-0 z-10" href="#">
                            <span className="sr-only">View article</span>
                        </Link>
                        <Image
                            alt="News image"
                            className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                            height={225}
                            src="/placeholder.svg"
                            width={400}
                        />
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    12 мая 2023
                                </span>
                            </div>
                            <h3 className="mt-2 text-lg font-semibold leading-tight">
                                Новые возможности для сотрудников
                            </h3>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Департамент расширяет программу обучения и
                                развития сотрудников. Подробности в статье.
                            </p>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md dark:bg-gray-950">
                        <Link className="absolute inset-0 z-10" href="#">
                            <span className="sr-only">View article</span>
                        </Link>
                        <Image
                            alt="News image"
                            className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                            height={225}
                            src="/placeholder.svg"
                            width={400}
                        />
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    5 мая 2023
                                </span>
                            </div>
                            <h3 className="mt-2 text-lg font-semibold leading-tight">
                                Новые партнерские соглашения
                            </h3>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Департамент заключил ряд новых партнерских
                                соглашений, которые позволят расширить спектр
                                услуг.
                            </p>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md dark:bg-gray-950">
                        <Link className="absolute inset-0 z-10" href="#">
                            <span className="sr-only">View article</span>
                        </Link>
                        <Image
                            alt="News image"
                            className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                            height={225}
                            src="/placeholder.svg"
                            width={400}
                        />
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    1 мая 2023
                                </span>
                            </div>
                            <h3 className="mt-2 text-lg font-semibold leading-tight">
                                Новый руководитель департамента
                            </h3>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Департамент приветствует нового руководителя,
                                который приступил к своим обязанностям.
                            </p>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md dark:bg-gray-950">
                        <Link className="absolute inset-0 z-10" href="#">
                            <span className="sr-only">View article</span>
                        </Link>
                        <Image
                            alt="News image"
                            className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                            height={225}
                            src="/placeholder.svg"
                            width={400}
                        />
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    25 апреля 2023
                                </span>
                            </div>
                            <h3 className="mt-2 text-lg font-semibold leading-tight">
                                Новые инициативы по улучшению работы
                            </h3>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Департамент запускает ряд новых инициатив,
                                направленных на повышение эффективности и
                                улучшение условий труда.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default page;
