import { El } from "@/components/shared/El";
import { TableRow } from "../main/tableRow";
import { addToOrder } from "@/api/setData";

export const ModalCreate = () => {
  const closeModal = () => {
    const modal = document.getElementById("modal");
    const overlay = document.getElementById("overlay");
    modal.style.display = "none";
    overlay.style.display = "none";
  };
  let obj = {};
  const changeTitle = (e) => {
    const title = e.target.value;
    obj.title = title;
  };
  
  const changePriority = (event) => {
    const selectPriority = event.target.value;
    // console.log(selectPriority);
    obj.priority = selectPriority;
  };
  const changeStatus = (e) => {
    const selectStatus = e.target.value;
    obj.status = selectStatus;
  };
  const changeDescription = (e) => {
    const description = e.target.value;
    obj.description = description;
  };
  const changeDeadline= (e) => {
    const deadline = e.target.value;
    obj.deadline = deadline;
  };
  console.log(obj);
// function changePriority(){
    //   if (order.priority === "Low") {
    //     className="spans bg-slate-400 font-bold";
    //   } else if (order.priority === "Medium") {
    //     className="spans bg-yellow-400 font-bold";
    //   } else if (order.priority === "High") {
    //     className="spans bg-red-500 text-white font-bold";
    //   }
    // }
  const SubmitBtn = (e) => {
    e.preventDefault();
    addToOrder(obj);
    console.log("pkh");
    closeModal()
    location.reload()
  };

  return El({
    element: "div",
    children: [
      El({
        element: "div",
        className: "overlay hidden",
        id: "overlay",
        eventListener: [{ event: "click", callback: closeModal }],
      }),
      El({
        element: "div",
        className: "modal hidden",
        id: "modal",
        children: [
          El({
            element: "span",
            className: "flex justify-center font-bold text-violet-700 font-black text-2xl font-serif",
            innerText: "Create A Tasks ! 😉",
          }),
          El({
            element: "hr",
            className: "mt-3",
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
                        eventListener: [
                          {
                            event: "change",
                            callback: changeTitle,
                          },
                        ],
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
                            eventListener: [
                              {
                                event: "change",
                                callback: changePriority,
                              },
                            ],
                            children: [
                              El({
                                element: "option",
                                innerText: "Select Priority",
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
                            element: "select",
                            name: "color",
                            className:
                              "p-2 rounded-r-full w-2/4 bg-black text-white outline-none shadow-gray-900 shadow-md font-black text-sm font-serif opacity-50 hover:opacity-100 ",
                            id: "selectStatus",
                            eventListener: [
                              {
                                event: "change",
                                callback: changeStatus,
                              },
                            ],
                            children: [
                              El({
                                element: "option",
                                innerText: "Select Status",
                              }),
                              El({
                                element: "option",
                                innerText: "Done",
                                value: "Done",
                              }),
                              El({
                                element: "option",
                                innerText: "Doing",
                                value: "Doing",
                              }),
                              El({
                                element: "option",
                                innerText: "ToDo",
                                value: "ToDo",
                              }),
                            ],
                          }),
                        ],
                      }),
                      El({
                        element: "div",
                        className: "flex gap-2 w-full mb-3",
                        children: [
                          El({
                            element: "input",
                            name: "description",
                            id: "input-description",
                            type: "text",
                            className:
                              "p-2 rounded-l-full w-2/4 bg-black text-white outline-none shadow-gray-900 shadow-md font-black text-sm font-serif opacity-50 hover:opacity-100 h-8",
                            placeholder: "Writing a description is optional",
                            eventListener: [
                              {
                                event: "change",
                                callback: changeDescription,
                              },
                            ],
                          }),
                          El({
                            element: "input",
                            name: "trip-start",
                            id: "input-date",
                            type: "date",
                            value: "1402-12-21",
                            className:
                              "p-2 rounded-r-full w-2/4 bg-black text-white outline-none shadow-gray-900 shadow-md font-black text-sm font-serif opacity-50 hover:opacity-100  h-8",
                              eventListener: [
                                {
                                  event: "change",
                                  callback: changeDeadline,
                                },
                              ],
                          }),
                          
                        ],
                      }),
                      El({
                        element: "button",
                        innerText: "Create Task",
                        className: "btn shadow-gray-900 shadow-md",
                        type: "submit",
                        id: "submitBtn",
                        eventListener: [
                          { event: "click", callback: SubmitBtn },
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
