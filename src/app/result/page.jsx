"use client"
import React from 'react'
const countryData=[
    {
        name:"bangladesh",
        code:"BN",
        division:["dhaka","khulna","jessore"]
    },
    {
        name:"INDIA",
        code:"IN",
        division:["kolkata","kumilla","meherpur"]
    },
    {
        name:"Pakistan",
        code:"PAK",
        division:["koraci","lahore","feni"]
    },
]




export default function page() {
const [country,setCountry]=React.useState(null)


  return (
    <div>

<select value={country} onChange={(e)=>setCountry(e.target.value)} name="country" id="a">
    {countryData.map((data,index)=>{
        return <option key={Math.random()} value={index} >{data.name}</option>
    })}
</select>

{country!==null ? (
    <select  name="country" id="a">
   {countryData[country].division.map((a,i)=>(
    <option value={a}>{a}</option>
   ))}
</select>
):""}




    </div>
  )
}
