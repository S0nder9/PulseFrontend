"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { fetchAllTitles } from "@/components/server/FetchJobTitle";
import { checkCookie } from "@/components/server/CheckCookie";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import DeparmentsList from "@/components/buildIn/DeparmentsList";
import JobTitlesList from "@/components/buildIn/JobTitlesList";
import registerUser from "@/components/server/Register";
/**
 * The `Registration` component is the main entry point for the registration page of the application. It handles the user registration process, including validating user input, fetching job titles, and redirecting the user to the login page upon successful registration.
 *
 * The component uses the `z` library for input validation, and the `useState` and `useEffect` hooks to manage the component's state and fetch job titles. The `createUser` function is responsible for validating the user input and attempting to register the user.
 *
 * The component renders a registration form with fields for the user's first name, last name, email, and password. It also includes a select dropdown for the user's job title, and an avatar upload functionality.
 *
 * @returns {JSX.Element} The `Registration` component
 */
function Registration() {
    //TODO добавить департамент и загругку
    const schematwo = z.object({
        login: z.string().min(6),
        password: z.string().min(6),
        first_name: z.string(),
        last_name: z.string(),
        father_name: z.string(),
        job_title_id: z.number(),
        age: z.number(),
        avatar: z.string(),
    });
    const [data, setdata] = useState({
        login: "",
        password: "",
        first_name: "",
        last_name: "",
        father_name: "",
        job_title_id: 0,
        age: 0,
        avatar: "",
        department_id: 0,
    });
    const router = useRouter();
    const [job_title, setjob_title] = useState<Array<jobTitle> | jobTitle>([]);
    async function createUser() {
        const result = schematwo.safeParse(data);
        if (!result.success) {
            throw new Error(result.error.message);
        }
        try {
            alert(data);
            await registerUser(data);
            // router.push('/login')
        } catch (error) {
            throw new Error("Failed to register user");
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            const isToken = await checkCookie();
            // if (isToken) {
            //   router.push('/profile')
            //   return
            // }

            const response = await fetchAllTitles();
            setjob_title(response);
        };
        fetchData();
    }, []);
    return (
        <main className="flex min-h-[100dvh] items-center justify-center bg-gradient-to-br from-[#f0f4ff] to-[#e6e9f2] px-4 py-12 dark:from-[#0f172a] dark:to-[#1e293b]">
            <div className="w-full max-w-md space-y-6 rounded-2xl bg-basic-default  p-6 shadow-lg dark:bg-gray-900">
                <header className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Регистрация</h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Создайте аккаунт для начала
                    </p>
                </header>
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="first-name">Имя</Label>
                            <Input
                                id="first-name"
                                placeholder="Иван"
                                required
                                className="rounded-xl"
                                value={data.first_name}
                                onChange={(e) => {
                                    setdata({
                                        ...data,
                                        first_name: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="last-name">Фамилия</Label>
                            <Input
                                id="last-name"
                                placeholder="Иванов"
                                required
                                className="rounded-xl"
                                value={data.last_name}
                                onChange={(e) => {
                                    setdata({
                                        ...data,
                                        last_name: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="last-name">Отчество</Label>
                            <Input
                                id="last-name"
                                placeholder="Иванович"
                                required
                                className="rounded-xl"
                                value={data.father_name}
                                onChange={(e) => {
                                    setdata({
                                        ...data,
                                        father_name: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="last-name">Возраст</Label>
                            <Input
                                id="last-name"
                                placeholder="35"
                                required
                                type="number"
                                min="18"
                                max="70"
                                className="rounded-xl"
                                value={data.age}
                                onChange={(e) => {
                                    setdata({
                                        ...data,
                                        age: parseInt(e.target.value),
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Логин</Label>
                        <Input
                            id="email"
                            placeholder=""
                            required
                            className="rounded-xl"
                            value={data.login}
                            onChange={(e) => {
                                setdata({ ...data, login: e.target.value });
                            }}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Пароль</Label>
                        <Input
                            id="password"
                            required
                            type="password"
                            className="rounded-xl"
                            value={data.password}
                            onChange={(e) => {
                                setdata({ ...data, password: e.target.value });
                            }}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                htmlFor="job"
                            >
                                Работа
                            </label>
                            <JobTitlesList
                                selected={data.job_title_id}
                                onChange={(e) => {
                                    setdata({
                                        ...data,
                                        job_title_id: parseInt(e),
                                    });
                                }}
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                htmlFor="department"
                            >
                                Департамент
                            </label>
                            <DeparmentsList
                                selected={data.department_id}
                                onChange={(e) => {
                                    setdata({
                                        ...data,
                                        department_id: parseInt(e),
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <div className="border-dashed border-2 border-gray-300 dark:border-gray-700 rounded-lg p-4 flex items-center justify-center w-full">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                            <Image
                                alt="Avatar placeholder"
                                height="64"
                                src={data.avatar}
                                style={{
                                    aspectRatio: "64/64",
                                    objectFit: "cover",
                                }}
                                width="64"
                            />
                        </div>
                        <div className="ml-4 text-sm">
                            <p className="font-semibold">
                                Перетащите файл сюда
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                или
                                <Label
                                    className="cursor-pointer underline ml-1"
                                    htmlFor="file"
                                >
                                    выберите файл
                                </Label>
                            </p>
                            <Input
                                className="hidden"
                                id="file"
                                type="file"
                                onChange={(e) => {
                                    const files = e.target.files;
                                    if (files && files.length > 0) {
                                        setdata({
                                            ...data,
                                            avatar: URL.createObjectURL(
                                                files[0]
                                            ),
                                        });
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <Button
                        className="w-full"
                        onClick={createUser}
                        type="button"
                    >
                        Зарегистрироваться
                    </Button>
                </form>
                <footer className="text-center text-sm text-gray-500 dark:text-gray-400">
                    Уже есть аккаунт?
                    <Link
                        className="font-medium underline underline-offset-2"
                        href="/login"
                    >
                        Вход
                    </Link>
                </footer>
            </div>
        </main>
    );
}
export default Registration;
