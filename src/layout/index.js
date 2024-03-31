import { El } from "@/components/shared/El"
import { Header } from "./header"

export const Content =()=>{
    return El({
        element:"div",
        children:[
            Header()
        ]
    })
}