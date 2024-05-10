import { useTheme } from 'next-themes';
import React from 'react'
import { Label } from '../ui/label';
import { Switch } from "@material-tailwind/react";
type Props = {}

function ThemeSwitcher({}: Props) {
    const { resolvedTheme, setTheme } = useTheme();
  return (
<div className="flex items-center space-x-2 flex-col ">
  <Switch
  color="blue" 
              onChange={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} 
              onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} 
              className="w-10 h-5" checked={resolvedTheme === 'dark'}  />
  
  </div>
  )
}

export default ThemeSwitcher