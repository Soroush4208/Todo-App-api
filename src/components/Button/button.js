import { El } from "../El";

export const ButtonCreate = () => {
  return El({
    element: "button",
    innerText: "Create Task",
    className: "btn shadow-gray-900 shadow-md",
    type: "submit",
    id: "submitBtn",
  });
};
