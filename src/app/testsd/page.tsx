'use client'
import React,{useState,useEffect,useRef} from 'react'
import { useRouter } from 'next/navigation'
import { fetchAllTitles } from '@/components/server/FetchJobTitle'
import Loading from '@/components/assembled/Loading'
type Props = {}

function Main({ }: Props) {


return (
<main className='  '>
<Loading/> 
</main>
)
}
export default Main

