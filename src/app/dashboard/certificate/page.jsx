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
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

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
     <div className="py-3">
     <Link className="bg-green-500 p-1 rounded-md  text-gray-700" href={'/dashboard/certificate/make'}>Genarate certificate</Link>
   </div>
   <div className="border w-[98%] mx-auto border-gray-700 rounded-md shadow-md ">
   
     <h1 className="text-center text-xl font-bold py-3">Certificates</h1>

 {data ? (

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
             <TableCell>{cer.candidateName}</TableCell>
             <TableCell>{cer.candidateNumber}</TableCell>
             <TableCell>{cer.candidateGrade}</TableCell>
             <TableCell className="text-right"><Link href={`/dashboard/certificate/${cer.crId}`} className="bg-emerald-500 px-3 text-gray-200 py-1 rounded-md">View</Link></TableCell>
           </TableRow>
         ))}
       </TableBody>
     
     </Table>
  

 ):<p className="text-red-400 font-semibold text-center">No Certificate found</p>}
  </div>
  </>


  )
}
