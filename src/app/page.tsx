"use client"
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState('')
  return (
    <main className="flex  p-24">
<h1>Вход</h1>
<Button className=" bg-orange-600" title="hello wordl">First Button</Button>
    <Input className="bg-orange-600" placeholder="Введите свой логин" />
    </main>
  );
}
//для добавления компонента run pnpm dlx shadcn-ui@latest add ... component name