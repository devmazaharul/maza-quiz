"use client"
import  Axios  from 'axios'

import React from 'react'

export default function page() {

const handleSubmit=async(e)=>{
    e.preventDefault()
    Axios.post("http://localhost:3001/signup",{name:"mazaharul isalm"}).then((e)=>{
        console.log(e.data)
    }).catch((err)=>{
        console.log(err)
    })
}


  return (
    <div>
        <form method='post' onSubmit={handleSubmit}>
            <input type="text" name="name" id="" />
            <input type="submit"  />
        </form>
    </div>
  )
}
