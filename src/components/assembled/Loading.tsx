import React from 'react'
type Props = {
   color:string
}

const Loading = (props: Props) => {

return (
<div className=' w-11 h-1/2 '>
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
   <circle transform='rotate(0)' transform-origin='center' fill='none' stroke={props.color}stroke-width='15' stroke-linecap='round' stroke-dasharray='230 1000' stroke-dashoffset='0' cx='100' cy='100' r='70'>
      <animateTransform 
         attributeName='transform'
         type='rotate'
         from='0'
         to='360'
         dur='1'
         repeatCount='indefinite'>
      </animateTransform>
   </circle>
</svg>
</div>
)
}

export default Loading