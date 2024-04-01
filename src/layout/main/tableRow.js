import { El } from "@/components/shared/El";
import { SubmitBtn } from "./submit";

export const TableRow = () => {
  const title = document.getElementById("input-title").value;
  const priority = document.getElementById("selectPriority").value;
  const status = document.getElementById("selectStatus").value;
  const description = document.getElementById("input-description").value;
  const deadline = document.getElementById("input-date").value;

  return El({
    element: "tr",
    children: [
      El({
        element: "td",
        className:
          "border-collapse border border-slate-500 py-2 text-start font-semibold pl-2",
        innerText: title,
      }),
      El({
        element: "td",
        className: "td",
        children: [
          El({
            element: "span",
            className: "span",
            innerText: priority,
          }),
        ],
      }),
      El({
        element: "td",
        className: "td",
        children: [
          El({
            element: "span",
            className: "span",
            innerText: status,
          }),
        ],
      }),
      El({
        element: "td",
        className: "td",
        children: [
          El({
            element: "span",
            className: "span",
            innerText: description,
          }),
        ],
      }),
      El({
        element: "td",
        className: "td",
        children: [
          El({
            element: "span",
            className: "span",
            innerText: priority,
          }),
        ],
      }),
      El({
        element: "td",
        className: "td",
        children: [
          El({
            element: "span",
            className: "span",
            innerText: status,
          }),
        ],
      }),
      El({
        element: "td",
        className: "td",
        children: [
          El({
            element: "span",
            className: "span",
            innerText: deadline,
          }),
        ],
      }),
      El({
        element: "td",
        className: "td",
        children: [
          El({
            element: "div",
            className:
              "flex justify-center items-center gap-1 py-1 border border-slate-300 py-2 text-center",
            children: [
              El({
                element: "img",
                className: "bg-red-600 cursor-pointer w-8 px-2 py-1 rounded",
                src: "./src/assets/svg/trash-bin-minimalistic-2-svgrepo-com.svg",
                elt: "icon trash",
              }),
              El({
                element: "img",
                className: "bg-blue-600 cursor-pointer w-8 px-2 py-1 rounded",
                src: "./src/assets/svg/edit-svgrepo-com.svg",
                elt: "icon edit",
              }),
              El({
                element: "img",
                className: "bg-slate-600 cursor-pointer w-8 px-2 py-1 rounded",
                src: "./src/assets/svg/eye-svgrepo-com.svg",
                elt: "icon eye",
              }),
            ],
          }),
        ],
      }),
    ],
    eventListener: [{ event: "click", callback: SubmitBtn }],
  });
};
