'use client'
import React,{useState,useEffect,useRef} from 'react'
import { useRouter } from 'next/navigation'
import { getAllQuests } from '@/components/server/getAllQuests'
import { fetchAllTitles } from '@/components/server/FetchJobTitle'
type Props = {}

function Main({ }: Props) {
const [a, seta] = useState("")
const [state, setState] = useState({
name: "Roman",
description: "",
members: [
{
id: 0,
name: "",
surname: ""
}
]
})

const [titles, settitles] = useState<any>()
useEffect(() => {
  const fetchData= async () => {
const response  = await fetchAllTitles()
settitles(response)
console.log(response)
}
fetchData()
}, [])

const handleSubmit = () => {
alert(state)
}

return (
<main className='  '>
<input
value={state.name}
onChange={(e) => {
setState({ ...state, name: e.target.value })
}} />
<button className=" bg-button-base hover:bg-hint-base text-button-base font-bold py-2 px-4 rounded-full text-xl flex" onClick={() => handleSubmit()}>
Оправить
</button>
{
state.name == "Roman" ?
<h1>Нельзя</h1>
:
<h1>
  Все роман
</h1>
}
</main>
)
}
export default Main

