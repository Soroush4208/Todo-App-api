import { El } from "./components/shared/El";
import { Content } from "./layout";

export const ToDos = () => {
    return El({
        element: "div",
        className:"p-2",
        children: [
            Content(),
        ]
    });
}
