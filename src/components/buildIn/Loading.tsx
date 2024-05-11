import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-screen  bg-basic-default">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-12 h-12 rounded-full border-4  border-loader border-t-transparent animate-spin" />
      <p className=" text-basic-default text-sm">Загрузка...</p>
    </div>
  </div>
  )
}

export default Loading