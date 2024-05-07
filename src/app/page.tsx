
import SearchIcon from "@/svg/SearchIcon";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  //const { scrollYProgress } = useScroll();
  return (
<div className="">
      <header className=" bg-red-500 text-white py-4 px-6 flex  items-center rounded-md sticky">
        <nav className="flex space-x-4 text-2xl">
          <Link className="hover:underline" href="/login" >
  Логин
          </Link>
          <Link className="hover:underline" href="/registration">
  Регистрация
          </Link>
          <Link className="hover:underline" href="S">
<Image

src='/logo.png'
alt="logo"
width="0"
height="0"
sizes="100vw"
className=" w-2/4   h-full justify-end"
/>
          </Link>

        </nav>

      </header>
      <main className="flex flex-col h-screen bg-red-500 ">
<h1 className="text-center items-center mt-1.5 text-4xl sm:text-3xl lg:text-4xl text-white">Приложение для удобного менеджинга труда</h1>
      </main>
      <section className="flex flex-col h-screen bg-gray-700 ">
<h1>Плюсы и возможности:</h1>
<motion.ul>
  Плюсы:
<motion.li 
transition={{
  ease: "linear",
  duration: 2,
  x: { duration: 1 }
}}>
Удобство управления трудящимися
</motion.li>
<motion.li>
Скорость
</motion.li>
<motion.li>
Стоимость
</motion.li>
</motion.ul>
      </section>
    </div>
  );
}
//для добавления компонента run pnpm dlx shadcn-ui@latest add ... component name