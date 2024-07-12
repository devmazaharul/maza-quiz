import React from 'react'
import Navbar from './Navbar'

export default function layout({children}) {
  return (
    <div className='grid grid-cols-5 '>
    <div className='col-span-1'>
        <Navbar/>
    </div>
<div className='col-span-4'>
    {children}
</div>
</div>
  )
}
