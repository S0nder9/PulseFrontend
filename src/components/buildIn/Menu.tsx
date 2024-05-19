import React from 'react'

type Props = {}

export default function Menu({}: Props) {
  return (
    <button className="group relative h-8 w-8 overflow-hidden rounded-md">
    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-1 transition-all duration-300 group-hover:rotate-180">
      <div className="h-1 w-6 bg-gray-900 transition-all duration-300 group-hover:rotate-[135deg] dark:bg-gray-50" />
      <div className="h-1 w-6 bg-gray-900 transition-all duration-300 group-hover:rotate-[45deg] dark:bg-gray-50" />
      <div className="h-1 w-6 bg-gray-900 transition-all duration-300 group-hover:rotate-[225deg] dark:bg-gray-50" />
    </div>
  </button>
  )
}