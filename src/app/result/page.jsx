import React from 'react'
import Resultform from './Resultform'
import { fethcadminData } from '../action'


export async function generateMetadata() {
  return {
    title: 'Result'

  }
}

export default async function page() {


  return (
    <div>
        <Resultform/>
    </div>
  )
}
