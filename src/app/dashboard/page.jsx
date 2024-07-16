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
import { fethcadminData } from "../action"

const getAdmnifo=await fethcadminData();
const {data}=getAdmnifo

export async function generateMetadata({ params }) {
  return {
    title: 'Dashboard'

  }
}

export default function TableDemo() {
  return (
  <div className="md:w-[96%] border border-gray-600 mx-auto shadow-md rounded-md">
      <Table>
      <TableCaption>Admin recent informaitio.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Admin Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">login Code</TableHead>
          <TableHead className="text-right">Total login</TableHead>
          <TableHead className="text-right">adminStatus</TableHead>
          <TableHead className="text-right">Last login</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      
          <TableRow>
            <TableCell className="font-medium">{data.id}</TableCell>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.email}</TableCell>
            <TableCell>{data.loginCode}</TableCell>
            <TableCell>{data.totalLogin}</TableCell>
            <TableCell>{data.adminStatus}</TableCell>
            <TableCell className="text-right">{data.lastLogin}</TableCell>
          </TableRow>

      </TableBody>
    
    </Table>
  </div>
  )
}
