import { El } from "@/components/shared/El";
export const closeModalFilter = () => {
  const modalFilter = document.getElementById("modalFilter");
  modalFilter.style.display = "none";
};
export const showModalFilter = () => {
  const modalFilter = document.getElementById("modalFilter");
  modalFilter.style.display = "block";
};

export const modalFilter = () => {
  return El({
    element: "div",
    className: "modalFilter",
    id:"modalFilter",
    children: [
      El({
        element: "div",
        className: "flex justify-between items-center",
        children: [
          El({
            element: "h2",
            innerText: "Filter",
            className: "font-bold text-sm",
          }),
          El({
            element: "span",
            innerText: "❌",
            className:
              "font-bold text-sm hover:bg-violet-500 p-1 rounded-md cursor-pointer",
            eventListener: [
              {
                event: "click",
                callback: closeModalFilter,
              },
            ],
          }),
        ],
      }),
      El({
        element: "p",
        className: "font-bold text-xs mt-4 ",
        innerText: "Filtered By Task Name",
      }),
      El({
        element: "input",
        className: "w-full border border-violet-900 pl-1 item-center",
        innerText: "Filtered By Priority",
        placeholder: "Task Name",
      }),
      El({
        element: "p",
        className: "font-bold text-xs mt-4 ",
        innerText: "Filtered By Priority",
      }),
      El({
        element: "select",
        name: "color",
        className: "w-full rounded-b-md p-1 border border-violet-900",
        children: [
          El({
            element: "option",
            innerText: "All",
          }),
          El({
            element: "option",
            innerText: "Low",
            value: "Low",
          }),
          El({
            element: "option",
            innerText: "Medium",
            value: "Medium",
          }),
          El({
            element: "option",
            innerText: "High",
            value: "High",
          }),
        ],
      }),
      El({
        element: "p",
        className: "font-bold text-xs mt-4 ",
        innerText: "Filtered By Status",
      }),
      El({
        element: "select",
        name: "color",
        className: "w-full rounded-b-md p-1 border border-violet-900",
        children: [
          El({
            element: "option",
            innerText: "All",
          }),
          El({
            element: "option",
            innerText: "ToDo",
            value: "ToDo",
          }),
          El({
            element: "option",
            innerText: "Doing",
            value: "Doing",
          }),
          El({
            element: "option",
            innerText: "Done",
            value: "Done",
          }),
        ],
      }),
    ],
  });
};
