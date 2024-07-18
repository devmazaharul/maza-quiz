import Cform from './Cform'

export async function generateMetadata({ params }) {
    return {
      title: 'Genarate certificate'
  
    }
  }
  

export default function page() {


  return (
   <>
   <Cform/>
   </>
  )
}
