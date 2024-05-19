"use client"
import Navigation from '@/components/buildIn/Navigation';
import { host } from '@/components/server/types';
import { Button } from '@/components/ui/button';
import React from 'react'

type Props = {
    params:{number:number}
}

function page(props: Props) {
    const handleDownload = async () => {
    const response = await fetch(`${host}get_report_for_department/${props.params.number}`);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `reportfor${props.params.number}.xls`
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    };
  return (
    <>
    <Navigation/>
    <section className="w-full py-12 md:py-24 lg:py-32   bg-basic-default min-h-screen">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">Май 2023</div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Отчет 
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Скачайте отчет о вашем департаменте в нескольких форматах.
          </p>
        </div>
        <div className="space-x-4">
    
          <Button
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            onClick={handleDownload}
          >
            Скачать Excel отчет
          </Button>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default page