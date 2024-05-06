import React from 'react'
import {motion, useTime, useTransform} from 'framer-motion'
type Props = {}

const Loading = (props: Props) => {

return (
    <div className="flex items-center justify-center h-screen w-full flex-col">
    <motion.div
      className="w-20 h-16 bg-red-100 rounded-xl"
      animate={{ rotate: 360, borderRadius: ['10%',"20%",'50%',"20%","10%"],color:["blue","green","yellow","orange","red"] }}
    
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
                <h1 className=' text-center'>Загрузка ...</h1>
    </motion.div>
  </div>
)
}

export default Loading