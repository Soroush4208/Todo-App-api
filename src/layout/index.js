import { El } from "@/components/shared/El"
import { Header } from "./header/header"
import { TableTask } from "./main/main"
import { ModalCreate } from "./modalCreate/create"

export const Content =()=>{
    return El({
        element:"div",
        children:[
            Header(),
            TableTask(),
            ModalCreate(),
        ]
    })
}