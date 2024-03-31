import { El } from "@/components/shared/El";

export const ModalCreate = () => {
const closeMadal =()=>{
    overlay.style.display="none"
}
  return El({
    element: "div",
    className: "overlay hidden",
    id:"overlay",
    children: [
      El({
        element: "div",
        className: "modal",
        children: [
          El({
            element: "span",
            className: "flex justify-center font-bold",
            innerText: "Create A Tasks ! 😉",
          }),
          El({
            element: "div",
            className: "flex flex-col p-5 rounded-xl",
            children: [
              El({
                element: "form",
                children: [
                  El({
                    element: "div",
                    className: "flex flex-col gap-2 w-full mb-3",
                    children: [
                      El({
                        element: "input",
                        name: "content",
                        id: "input-title",
                        type: "text",
                        className:
                          "p-2 shadow-gray-900 opacity-50 hover:opacity-100 bg-black text-white shadow-md rounded-2xl w-full outline-none font-black text-sm h-9",
                        placeholder: "Task Name",
                      }),
                      El({
                        element: "div",
                        className: "flex w-full justify-between gap-2",
                        children: [
                          El({
                            element: "select",
                            name: "color",
                            className:
                              "p-2 rounded-l-full w-2/4 bg-black text-white outline-none shadow-gray-900 shadow-md font-black text-sm font-serif opacity-50 hover:opacity-100 ",
                            id: "selectPriority",
                            children: [
                              El({
                                element: "option",
                                className: "",
                                innerText: "Select Priority",
                              }),
                              El({
                                element: "option",
                                className: "",
                                innerText: "Low",
                                value: "Low",
                              }),
                              El({
                                element: "option",
                                className: "",
                                innerText: "Medium",
                                value: "Medium",
                              }),
                              El({
                                element: "option",
                                className: "",
                                innerText: "High",
                                value: "High",
                              }),
                            ],
                          }),
                          El({
                            element: "select",
                            name: "color",
                            className:
                              "p-2 rounded-r-full w-2/4 bg-black text-white outline-none shadow-gray-900 shadow-md font-black text-sm font-serif opacity-50 hover:opacity-100 ",
                            id: "selectPriority",
                            children: [
                              El({
                                element: "option",
                                className: "",
                                innerText: "Select Status",
                              }),
                              El({
                                element: "option",
                                className: "",
                                innerText: "Low",
                                value: "Low",
                              }),
                              El({
                                element: "option",
                                className: "",
                                innerText: "Medium",
                                value: "Medium",
                              }),
                              El({
                                element: "option",
                                className: "",
                                innerText: "High",
                                value: "High",
                              }),
                            ],
                          }),
                          
                        ],
                      }),
                      El({
                        element: "input",
                        name: "content",
                        id: "input-title",
                        type: "text",
                        className:
                          "p-2 shadow-gray-900 opacity-50 hover:opacity-100 bg-black text-white shadow-md rounded-2xl w-full outline-none font-black text-sm h-9",
                        placeholder: "Writing a description is optional",
                      }),
                      El({
                        element: "button",
                        innerText: "Create Task",
                        className: "btn shadow-gray-900 shadow-md",
                        type: "submit",
                        id: "submitBtn",
                      })
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
    eventListener: [{ event: 'click', callback: closeMadal }],
  });
};
