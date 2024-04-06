import { El } from "@/components/shared/El";
import { getOrders } from "@/api/getData";
import { deleteData } from "@/api/deleteData/delet";
const orders = await getOrders();
console.log(orders);

export const TableRow = () => {
  const data = orders.map((order) => {
    console.log(order);
    
    return El({
      element: "tr",
      children: [
        El({
          element: "td",
          className:
            "border-collapse border border-slate-500 py-2 text-start font-semibold pl-2",
          innerText: order.title,
        }),
        El({
          element: "td",
          className: "td",
          children: [
            El({
              element: "span",
              className:"spans",
              innerText: order.priority,
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
              innerText: order.status,
            }),
          ],
        }),
        El({
          element: "td",
          className: "td",
          children: [
            El({
              element: "span",
              className: "spans border border-blue-500",
              innerText: order.deadline,
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
                "flex justify-center items-center gap-1 py-1 py-2 text-center",
              children: [
                El({
                  element: "img",
                  className: "bg-red-600 cursor-pointer w-8 px-2 py-1 rounded",
                  src: "./src/assets/svg/trash-bin-minimalistic-2-svgrepo-com.svg",
                  elt: "icon trash",
                  eventListener:[
                    {event:"click" , callback:deleteData}
                  ]
                }),
                El({
                  element: "img",
                  className: "bg-blue-600 cursor-pointer w-8 px-2 py-1 rounded",
                  src: "./src/assets/svg/edit-svgrepo-com.svg",
                  elt: "icon edit",
                }),
                El({
                  element: "img",
                  className:
                    "bg-slate-600 cursor-pointer w-8 px-2 py-1 rounded",
                  src: "./src/assets/svg/eye-svgrepo-com.svg",
                  elt: "icon eye",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  });

  console.log(data);
  return El({
    element:"tbody",
    id:"tbody",
    children:data,
  });
};
