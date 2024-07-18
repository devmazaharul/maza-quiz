import React from 'react'
import Link from 'next/link'
import Allquiz from "./Allquiz"


export async function generateMetadata({ params }) {
    return {
      title: 'All quiz'
    }
  }

export default function page() {
  return (
    <div>
        <div className="hera py-3">
            <Link className='bg-pink-600 rounded-md text-gray-200 py-1 px-6 ' href='/dashboard/add-quiz'>Add quiz</Link>
        </div>

        <Allquiz/>
    </div>
  )
}
