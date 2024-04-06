import { El } from "@/components/shared/El"
import { Header } from "./header/header"
import { TableTask } from "./main/tablehead"
import { ModalCreate } from "./modalCreate/create"
import { modalFilter } from "./modalFilter/modalFilter"
import { Footer } from "./footer/footer"


export const Content =()=>{
    return El({
        element:"div",
        children:[
            Header(),
            TableTask(),
            ModalCreate(),
            modalFilter(),
            Footer()
        ]
    })
}