import React, { Suspense } from 'react'
import Cerform from './Ccerform'

export async function generateMetadata({ params }) {
  return {
    title: 'Certificate'

  }
}

export default function page() {
  return (
    <>
<div>
  <Suspense fallback="loading...">
  <Cerform/>
  </Suspense>
</div>
    </>
  )
}
