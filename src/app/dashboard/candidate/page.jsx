import React, { Suspense } from 'react'
import CandidateTable from './CandidateTable'

export async function generateMetadata({ params }) {
    return {
      title: 'Candidates'
     
    }
  }
  
export default function page() {
    
  return (
    <>
    <Suspense fallback="loading...">
    <CandidateTable/>
    </Suspense>


    </>
  )
}
