import React from 'react'

type Props = {
    isOpened:boolean,
    setisOpened:React.Dispatch<React.SetStateAction<boolean>>
    type:string | null,
    toStatus:string | null,
    name:string | null,
    id:number | null,
}

function AlertComponent(props: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 w-full h-screen"> 
        {
props.type =="patch" || "add" ?
<div className="mx-4 w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
    {
        props.type =="patch" ?
        <>
        <div className="mb-4">
        <h2 className="text-2xl font-bold">Важное сообщение изменить</h2>
      </div>
      <div className="mb-6">
        <p className="text-gray-600 dark:text-gray-400">
          Это важное сообщение, которое требует вашего внимания. Пожалуйста, ознакомьтесь с ним.
        </p>
      </div>
      <div className="flex justify-between">
        <button className="rounded-md bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800"
        onClick={() => props.setisOpened(false)}>
         Закрыть
        </button>
        <button className="rounded-md bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800">
          Принять
        </button>
      </div>
      </>
      :
<>
<div className="mb-4">
  <h2 className="text-2xl font-bold">Важное сообщение добавить</h2>
</div>
<div className="mb-6">
  <p className="text-gray-600 dark:text-gray-400">
    Это важное сообщение, которое требует вашего внимания. Пожалуйста, ознакомьтесь с ним.
  </p>
</div>
<div className="flex justify-between">
  <button className="rounded-md bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800"
  onClick={() => props.setisOpened(false)}>
   Закрыть
  </button>
  <button className="rounded-md bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800">
    Принять
  </button>
</div>
</>
    }
</div>
:
<div className="mx-4 w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
{
    props.type === "delete"  ?
    <>
    <div className="mb-4">
    <h2 className="text-2xl font-bold">Важное сообщение удалить </h2>
  </div>
  <div className="mb-6">
    <p className="text-gray-600 dark:text-gray-400">
      Это важное сообщение, которое требует вашего внимания. Пожалуйста, ознакомьтесь с ним.
    </p>
  </div>
  <div className="flex justify-between">
    <button className="rounded-md bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800"
    onClick={() => props.setisOpened(false)}>
     Закрыть
    </button>
    <button className="rounded-md bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800">
      Принять
    </button>
  </div>
  </>
:
    <>
    <div className="mb-4">
    <h2 className="text-2xl font-bold">Важное сообщение перевести</h2>
  </div>
  <div className="mb-6">
    <p className="text-gray-600 dark:text-gray-400">
      Это важное сообщение, которое требует вашего внимания. Пожалуйста, ознакомьтесь с ним.
    </p>
  </div>
  <div className="flex justify-between">
    <button className="rounded-md bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800"
    onClick={() => props.setisOpened(false)}>
     Закрыть
    </button>
    <button className="rounded-md bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800">
      Принять
    </button>
  </div>
  </>
}
    </div>
        }
        </div>
  )
}

export default AlertComponent