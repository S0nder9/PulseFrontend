
'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { getUserByPrefixSurname } from "@/components/server/getUserProjects"
import { createProject } from "@/components/server/Create"
import { useRouter } from "next/navigation"
import SearchUser from "@/components/buildIn/searchUser"
import Navigation from "@/components/buildIn/Navigation"

export function CreatePage() {
const router = useRouter()
const [project, setproject] = useState({
name: "",
description: "",
members: [
{
id: 0,
name: "",
surname: ""
}
]
})
const userId: userData = JSON.parse(localStorage?.getItem('userData') || '{}');
const [membersIds, setmembersIds] = useState<Array<number>>([userId.id])
const [name, setName] = useState('')
const [users, setusers] = useState<Array<userData> | userData>([])
useEffect(() => {
const getNames = async () => {
const users = await getUserByPrefixSurname(name)
setusers(users)
}
if (name.length < 1) {
return
}
setTimeout(() => {
getNames()
}, 1000)

}, [name])
const handleSelectUser = (user: userData) => {
setproject((prev) => ({
...prev, members: [...prev.members, {
name: user.first_name,
surname: user.last_name,
id: user.id
}]
}))

setmembersIds((prevIds) => [...prevIds, user.id])
}
const createProjectClient = async () => {
try {
alert(`${project.name},${project.description},${membersIds}`)
const response = await createProject(project.name, project.description, membersIds)
response.toString()
console.log(response)
router.push(`/projectView/${response}`)

}
catch (error) {
console.log(error)
}
}
return (
  <>  <Navigation />
<Card className="bg-basic-default min-h-screen ">
<div className="flex space-x-4 bg-basic-default w-full ">
<CardContent className="w-full max-w-lg space-y-4">
<div className="space-y-2 rounded-lg  bg-basic-default mt-5">
<h2 className="text-2xl font-bold bg-basic-default ">Добавить проект</h2>
<p className="text-gray-500 dark:text-gray-400">
Добавьте свой проект, введите название проекта, описание и выберите участников.
</p>
</div>
<div className="space-y-2 ">
<Label htmlFor="project-name">Название проекта</Label>
<Input id="project-name" placeholder="Название проекта"
className="rounded-xl"
value={project.name} onChange={(e) => setproject((prev) => ({ ...prev, name: e.target.value }))} />
</div>
<div className="space-y-2">
<Label htmlFor="description">Описание</Label>
<Textarea className="min-h-[100px] text-basic-default rounded-xl" id="description" placeholder="Описание"
value={project.description} onChange={(e) => setproject((prev) => ({ ...prev, description: e.target.value }))} />
</div>
<SearchUser memberIds={membersIds}/>
</CardContent>
<CardContent className="flex-none">

</CardContent>
</div>
<CardFooter className="flex justify-end">
<Button onClick={() => createProjectClient()} className="border-base">Создать проект</Button>
</CardFooter>
</Card>
</>
)
}
export default CreatePage