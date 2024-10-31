"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function Custom404() {
    const router = useRouter();
    return (
        <main className="flex flex-col items-center justify-center min-h-screen  bg-basic-default">
            <div className="mb-8   animate-pulse">
                <Image
                    alt="Рабочий Пульс"
                    height={200}
                    src="/go.png"
                    style={{
                        aspectRatio: "200/200",
                        objectFit: "cover",
                    }}
                    width={200}
                />
            </div>
            <div className="text-center">
                <h1 className="text-4xl font-bold  text-basic-default mb-4">
                    Не найдено
                </h1>
                <p className="text-basic-default mb-8">
                    Извините, но страница, которую вы искали, не найдена.
                </p>
            </div>
            <Button
                className="inline-flex items-center justify-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors duration-300"
                onClick={() => router.push("/profile")}
            >
                Вернуться домой
            </Button>
        </main>
    );
}
