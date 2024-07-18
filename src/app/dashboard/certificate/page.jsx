import { getAllcertificate } from "@/app/action"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"


export async function generateMetadata({ params }) {
  return {
    title: 'certificates',
    description:"Genarate certificate your exam"
  }
}

export default async function TableDemo() {

const {data}=await getAllcertificate()

  return (
  <>
  {data && (
 <div>
      <div className="py-3">
       <Link className="bg-green-500 p-1 rounded-md  text-gray-700" href={'/dashboard/certificate/make'}>Genarate certificate</Link>
     </div>
     <div className="border w-[98%] mx-auto border-gray-700 rounded-md shadow-md ">
     
       <h1 className="text-center text-xl font-bold py-3">Certificates</h1>
 <Table className="mt-6">
         <TableCaption>A list of your recent invoices.</TableCaption>
         <TableHeader>
           <TableRow>
             <TableHead className="w-[150px]">Student Id</TableHead>
             <TableHead className="w-[150px]">Status</TableHead>
             <TableHead>Name</TableHead>
             <TableHead>Number</TableHead>
             <TableHead>Grade</TableHead>
             <TableHead className="text-right">View</TableHead>
           </TableRow>
         </TableHeader>
         <TableBody>
           {data?.info?.reverse().map((cer,i) => (
             <TableRow key={i}>
               <TableCell className="font-medium">#{cer.crId}</TableCell>
               <TableCell className="font-medium">{cer.candidateGrade=="fail"?<p className="text-red-400">Fail</p>:<p className="text-green-400">Pass</p>}</TableCell>
               <TableCell className="capitalize">{cer.candidateName}</TableCell>
               <TableCell>{cer.candidateNumber}</TableCell>
               <TableCell className="capitalize">{cer.candidateGrade}</TableCell>
               <TableCell className="text-right"><Link href={`/dashboard/certificate/${cer.crId}`} className="bg-emerald-500 px-3 text-gray-200 py-1 rounded-md">View</Link></TableCell>
             </TableRow>
           ))}
         </TableBody>
       
       </Table>



       </div>
  
    </div>
  )}
  </>


  )
}
