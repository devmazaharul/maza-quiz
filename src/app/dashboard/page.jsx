import React from 'react'
import { fethcadminData } from '../action'

export default async function page() {
  const getAdmin=await fethcadminData()
const {data,message}=getAdmin

  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.email}</h1>
      <h1>{data.id}</h1>
      <h1>{data.lastLogin}</h1>
    </div>
  )
}
