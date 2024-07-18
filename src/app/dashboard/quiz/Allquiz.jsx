
import { doQuizdlt, getQuizlist } from "@/app/action"
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

  export default async function TableDemo() {
    const quizdata=await getQuizlist()


    return (
      <form action={doQuizdlt} className="w-[98%] mx-auto shadow-md border rounded-md p-1 border-gray-700">
<Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Quiz id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Manage</TableHead>
          </TableRow>
        </TableHeader>  
        <TableBody>  
          {quizdata?.data && quizdata?.data.reverse().map((item,i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">#{item.quizId}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.desc}</TableCell>
              <TableCell className="text-right flex items-center gap-1">
                <Link  href="#" className="bg-green-400 px-2 py-1 rounded-md hover:bg-green-500">Edit</Link>
             <button name="action" value={item.quizId} className="bg-red-400 px-2 py-1 rounded-md hover:bg-red-500">Delete</button>
             </TableCell>
            </TableRow>
          ))}
        </TableBody>
      
      </Table>
      </form>
    )
  }
  