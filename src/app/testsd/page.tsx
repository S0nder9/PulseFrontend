'use client'
import React,{useState,useEffect,useRef} from 'react'
import { useRouter } from 'next/navigation'
import { getAllQuests } from '@/components/server/getAllQuests'
type Props = {}

  function Karta ({}: Props) {
  useEffect( () => {
/**
* Fetches all quest data and updates the quizData state.
* 
* This function is responsible for retrieving all the quest data from the backend and updating the quizData state with the fetched data. If there is an error during the fetch, it will throw an error.
*/
const fetchData = async () => {
const allQues = await getAllQuests()


setQuizData(allQues)
}
    fetchData()
        },[])
      const [quizData,setQuizData] = useState<any>([{
        "id":0,
        "question":"",
        "answer":"",
        "variants":["", "","",""],
        "location": "",
        "hardness":"",
        "lat":0,
        "lon": 0,
        "author":"",
        "quizIn": "",
        "categorie":""
      }])
      
      const [augedInfo, setaugedInfo] = useState<any>({
        ip:0,
        lat:56.856825,
        lon:53.198824,
      })
      const router = useRouter()
    const height = window.innerHeight - 100
    const width = window.innerWidth
   // const  coordinaets = [{longtail:56.856825,sovtail:53.198824,title:'Квест в падике'},{longtail:56.862081,sovtail:53.218237,title:'Квест на парусах'},]
    
  return (
    <main className='  '>
                    <button className=" bg-button-base hover:bg-hint-base text-button-base font-bold py-2 px-4 rounded-full text-xl flex" onClick={()=> router.push(`/`)}>
Обратно на главную
</button>
    <div className='  w-full '>
    {
  quizData[0].id == 0 ? 
<h1>неТ ДАТЫ</h1>
  :
      <h1>{quizData}</h1>
}
</div>
</main>
  )
}
export default Karta