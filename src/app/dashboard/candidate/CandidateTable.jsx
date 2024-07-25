import { getCandidates } from "@/app/action"
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


  

  export default async function TableDemo() {
    const {data,message}= await getCandidates()
    return (
        <>
        {data? (
               <div className="w-[96%] mx-auto shadow-lg rounded-md border border-gray-800">
               <Table>
                <TableCaption>A list of your candidate.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px]">Candidate ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Number</TableHead>
                    <TableHead className="text-right">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.reverse().map((item) => (
                    <TableRow key={item.userID}>
                      <TableCell className="font-medium">{item.userID}</TableCell>
                      <TableCell className="capitalize">{item.userName}</TableCell>
                      <TableCell>{item.userNumber}</TableCell>
                      <TableCell className="text-right">{item.signupDate}</TableCell>
                     
                    </TableRow>
                  ))}
                </TableBody>
               
              </Table>
           </div>
        ):<p className="text-red-500 font-semibold text-center">No Candidate found</p>}
        </>

    )
  }
  