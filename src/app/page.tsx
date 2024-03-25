
import Link from "next/link";
export default function Home() {
  return (
  <>
<main className="flex flex-col  p-24 ">
  <nav>
    <Link href='/login'>Вход</Link>
  </nav>

    </main>
    </>
  );
}
//для добавления компонента run pnpm dlx shadcn-ui@latest add ... component name