import React from 'react'
import { fethcData } from '../action'
export default async function page() {
 const user_data=await fethcData()

  return (
    <div>{user_data.data.map((item)=>(
<p key={Math.random()}>{item.address}</p>
    ))}</div>
  )
}
