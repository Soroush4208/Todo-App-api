import { El } from "./components/shared/El";
import { Content } from "./layout";
import { TableTask } from "./layout/main";

export const ToDos = () => {
    return El({
        element: "div",
        children: [
            Content(),
            TableTask()
        ]
    });
}
