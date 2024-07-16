import React from 'react'
import Quizform from './Quizform'

export async function generateMetadata({ params }) {
  return {
    title: 'Add quiz'

  }
}


export default function page() {

  return (
    <div className='mt-8'>
      <h1 className='text-xl text-center text-gray-400 font-bold py-4'>Add your specil quiz singly</h1>
      <Quizform/>
    </div>
  )
}
