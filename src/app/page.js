
import Hero from "./_components/Hero";
import Services from "./_components/Services";

export async function generateMetadata() {
  return {
    title: 'Welcome'

  }
}

export default async function Home() {
  

  return (
    <div>
  
    <Hero/>
    <Services/>

    </div>
  )
}
