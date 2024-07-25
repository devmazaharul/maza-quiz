
import Cerform from './Ccerform'

export async function generateMetadata({ params }) {
  return {
    title: 'Certificate'

  }
}

export default function page() {
  return (
    <>


  <Cerform/>

    </>
  )
}
