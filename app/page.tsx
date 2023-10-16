import { Form,FormControl,FormField,FormItem,FormLabel,FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import Tiptap from "@/components/ui/Tiptap"
export default function Home(){
  return(
  <main className="container">
        <h1>Home</h1>
        <Tiptap />
    </main>
  )
}