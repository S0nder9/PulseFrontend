import Link from 'next/link'
import React from 'react'

type Props = {
    text:string
}

export default  function Error  (props: Props)  {
  return (
<div className="flex justify-center items-center h-screen flex-col  bg-basic-default">
        <h1 className=' text-basic-default'>Возникла ошибка: {props.text} </h1>
        <Link 
        className='text-basic-default  border-base hover:border-4 rounded-xl'
        href='/'
        > Обратно на главную</Link>
        </div>
  )
}