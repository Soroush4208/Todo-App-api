import { El } from "../El";

export const ButtonCreate = (text,style,type) => {
  return El({
    element: "button",
    innerText:  text,
    className: "btn shadow-gray-900 shadow-md",
    type: "submit",
    id: "submitBtn",
  });
};
